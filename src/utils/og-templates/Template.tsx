import { SITE } from "../../config";

interface Props {
  title: string;
  description?: string;
  category?: string;
}

const OGTemplate = ({ title, description, category }: Props) => {
  return (
    <div
      style={{
        background: "#080808",
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          opacity: 0.05,
        }}
      >
        {Array.from({ length: 11 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "60px",
              borderBottom: "1px solid #c8a97a",
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          opacity: 0.05,
        }}
      >
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "60px",
              height: "100%",
              borderRight: "1px solid #c8a97a",
            }}
          />
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1, position: "relative" }}>
        {/* Label Header */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
          <div style={{ width: "40px", height: "2px", background: "#c8a97a", marginRight: "15px" }} />
          <div
            style={{
              color: "#c8a97a",
              fontSize: "24px",
              fontFamily: "DM Sans",
            }}
          >
            {category || "Harman Singh Hira"}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 80 ? "60px" : title.length > 50 ? "75px" : "90px",
            fontWeight: 800,
            fontFamily: "Syne",
            color: "#f0ede8",
            lineHeight: 1.1,
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: title.length > 80 ? "28px" : "32px",
              color: "#9a9590",
              fontFamily: "DM Sans",
              lineHeight: 1.4,
              maxWidth: "900px",
              display: "-webkit-box",
              // @ts-ignore
              webkitLineClamp: title.length > 80 ? 2 : 3,
              webkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </div>
        )}
      </div>

      {/* Footer Branding */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#161616",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50px",
            padding: "10px 25px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "5px",
              background: "#4dbd74",
              marginRight: "12px",
            }}
          />
          <div style={{ color: "#9a9590", fontSize: "20px", fontFamily: "DM Sans" }}>
            {new URL(SITE.website).hostname}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OGTemplate;
