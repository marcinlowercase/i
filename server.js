//server.js
import { serve } from "https://deno.land/std@0.211.0/http/server.ts";
import { join } from "https://deno.land/std@0.211.0/path/mod.ts";
import { contentType } from "https://deno.land/std@0.211.0/media_types/mod.ts";

const PORT = 11111;
const ui_directory = "ui";

const handleRequest = async (request) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  try {
    let filePath = "";
    if (pathname === "/i") {
      filePath = join(Deno.cwd(), ui_directory, "i", "i.html");
      var file = await Deno.readTextFile(filePath);

      const has_simulated_cursor =
        request.headers.get("simulated_cursor") === "true";

      const client_device_corner_radius = parseFloat(
        request.headers.get("device_corner_radius") || "0",
      );

      const client_config_script = `
              <script>
                window.APP_CONFIG = {
                  has_simulated_cursor: ${has_simulated_cursor},
                  client_device_corner_radius: ${client_device_corner_radius},
                };

              </script>
            `;

      file = file.replace("</head>", `${client_config_script}</head>`);

      const fileExtension = filePath.split(".").pop();
      const responseHeaders = new Headers({
        "content-type":
          contentType(`.${fileExtension}`) || "application/octet-stream",
      });
      return new Response(file, {
        status: 200,
        headers: responseHeaders,
      });
    } else {
      filePath = join(Deno.cwd(), ui_directory, "i", pathname);

      const file = await Deno.readTextFile(filePath);

      const fileExtension = filePath.split(".").pop();

      const responseHeaders = new Headers({
        "content-type":
          contentType(`.${fileExtension}`) || "application/octet-stream",
      });

      return new Response(file, {
        status: 200,
        headers: responseHeaders,
      });
    }
  } catch (error) {
    console.warn(`File not found: ${pathname}`);
    return new Response("Not Found", { status: 404 });
  }
};

console.log(`Server listening on port ${PORT}`);
await serve(handleRequest, { port: PORT });
