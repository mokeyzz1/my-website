import { ImageResponse } from "next/og";

export const socialImageAlt = "Moses Koroma portfolio";
export const socialImageSize = {
  width: 1200,
  height: 630,
};
export const socialImageContentType = "image/png";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f5f5ef",
          color: "#000000",
          padding: "54px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            border: "5px solid #000000",
            boxShadow: "14px 14px 0 #000000",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "48px 52px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: "0.16em",
              }}
            >
              MK / PORTFOLIO
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 74,
                  lineHeight: 0.95,
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  textTransform: "uppercase",
                }}
              >
                MOSES
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 74,
                  lineHeight: 0.95,
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  textTransform: "uppercase",
                }}
              >
                KOROMA
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 24,
                  fontSize: 27,
                  fontWeight: 700,
                }}
              >
                Selected Product, Data & Software Work
              </div>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {["DATA", "PRODUCT", "SOFTWARE"].map((label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    border: "3px solid #000000",
                    padding: "9px 15px",
                    fontSize: 16,
                    fontWeight: 800,
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: 330,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "44px",
              borderLeft: "5px solid #000000",
              background: "#ffff00",
            }}
          >
            <div style={{ display: "flex", fontSize: 18, fontWeight: 800 }}>
              WWW.MKOROMA.COM
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 43,
                lineHeight: 1.15,
                fontWeight: 900,
                letterSpacing: "-0.04em",
              }}
            >
              <span>BUILD.</span>
              <span>ANALYZE.</span>
              <span>SHIP.</span>
            </div>
            <div
              style={{
                display: "flex",
                width: 58,
                height: 58,
                border: "4px solid #000000",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 900,
              }}
            >
              MK
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
