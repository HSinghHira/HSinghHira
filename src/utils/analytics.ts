/**
 * Central Analytics Utility
 * Handles events for both Google Analytics 4 (GA4) and Umami.
 */

declare global {
    interface Window {
        gtag?: (command: "event", name: string, data?: Record<string, unknown>) => void;
        umami?: {
            track: (name: string, data?: Record<string, unknown>) => void;
        };
    }
}

export const trackEvent = (name: string, data?: Record<string, unknown>) => {
    if (typeof window === "undefined") return;

    // Track in GA4
    if (typeof window.gtag === "function") {
        try {
            window.gtag("event", name, data);
        } catch {
            // Ignore GA tracking errors
        }
    }

    // Track in Umami
    if (typeof window.umami?.track === "function") {
        try {
            window.umami.track(name, data);
        } catch {
            // Ignore Umami tracking errors
        }
    }
};

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%)
 * Fires only once per milestone per page load.
 */
export const trackScrollDepth = (postSlug: string) => {
    if (typeof window === "undefined") return;

    const milestones = [25, 50, 75, 100];
    const trackedMilestones = new Set<number>();

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) return;

        const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

        for (const milestone of milestones) {
            if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
                trackEvent("scroll_depth", {
                    percent: milestone,
                    post: postSlug,
                });
                trackedMilestones.add(milestone);
            }
        }

        if (trackedMilestones.size === milestones.length) {
            window.removeEventListener("scroll", handleScroll);
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
};

/**
 * Track time spent on the article (30s, 90s)
 */
export const trackTimeOnPage = (postSlug: string) => {
    if (typeof window === "undefined") return;

    const milestones = [30, 90];
    const timers: number[] = [];

    milestones.forEach((seconds) => {
        const timer = window.setTimeout(() => {
            trackEvent("engaged_time", {
                seconds,
                post: postSlug,
            });
        }, seconds * 1000);
        timers.push(timer);
    });

    // Return a cleanup function
    return () => {
        timers.forEach((timer) => clearTimeout(timer));
    };
};

/**
 * Track outbound link clicks using event delegation
 */
export const trackOutboundClicks = (postSlug?: string) => {
    if (typeof window === "undefined") return;

    const handleOutboundClick = (event: MouseEvent) => {
        const target = (event.target as HTMLElement).closest("a");
        if (!target) return;

        const href = target.getAttribute("href");
        if (!href) return;

        // Check if it's an absolute URL and not on the same domain
        try {
            const url = new URL(href, window.location.origin);
            if (url.origin !== window.location.origin && href.startsWith("http")) {
                trackEvent("outbound_click", {
                    url: href,
                    post: postSlug || "site_wide",
                });
            }
        } catch {
            // Not a valid URL or other error
        }
    };

    document.addEventListener("click", handleOutboundClick);
};

/**
 * Track code copy events
 */
export const trackCodeCopy = (postSlug: string) => {
    if (typeof window === "undefined") return;

    const handleCopy = (event: MouseEvent) => {
        const target = (event.target as HTMLElement).closest("[data-copy-code]");
        if (target) {
            trackEvent("code_copy", {
                post: postSlug,
            });
        }
    };

    document.addEventListener("click", handleCopy);
};
