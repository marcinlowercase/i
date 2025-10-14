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
    } else {
      filePath = join(Deno.cwd(), ui_directory, "i", pathname);
    }
    const file = await Deno.readTextFile(filePath);

    const hasSimulatedCursor =
      request.headers.get("simulated_cursor") === "true";

    const clientConfigScript = `
            <script>
              window.APP_CONFIG = { hasSimulatedCursor: ${hasSimulatedCursor} };
            </script>
          `;

    file.replace("</head>", `${clientConfigScript}</head>`);

    const fileExtension = filePath.split(".").pop();

    const responseHeaders = new Headers({
      "content-type":
        contentType(`.${fileExtension}`) || "application/octet-stream",
    });

    return new Response(file, {
      status: 200,
      headers: responseHeaders,
    });
  } catch (error) {
    console.warn(`File not found: ${pathname}`);
    return new Response("Not Found", { status: 404 });
  }
};

console.log(`Server listening on port ${PORT}`);
await serve(handleRequest, { port: PORT });
