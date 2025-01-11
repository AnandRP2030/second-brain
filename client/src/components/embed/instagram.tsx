interface InstagramEmbedProps {
    link: string;
}
export const InstagramEmbed = (props: InstagramEmbedProps) => {
  const {link} = props;

  const instaWebURL = "ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
  const instaEmbedURL = "ig_embed&amp;utm_campaign=loading"

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={link}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: 0,
        width: "99.375%",
        //@ts-ignore
        WebkitCalc: "100% - 2px",
        calc: "100% - 2px",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href={link}
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            padding: "0 0",
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noreferrer"
        >
          {/* Placeholder for Instagram's content */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: "50%",
                flexGrow: 0,
                height: "40px",
                marginRight: "14px",
                width: "40px",
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: 0,
                  height: "14px",
                  marginBottom: "6px",
                  width: "100px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  flexGrow: 0,
                  height: "14px",
                  width: "60px",
                }}
              ></div>
            </div>
          </div>
        </a>
      </div>
    </blockquote>
  );
};