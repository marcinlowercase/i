import { serve } from "https://deno.land/std@0.211.0/http/server.ts";
import { join } from "https://deno.land/std@0.211.0/path/mod.ts";
import { contentType } from "https://deno.land/std@0.211.0/media_types/mod.ts";

const PORT = 11111;
const UI_DIRECTORY = "ui";

const handleRequest = async (request) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  try {
    let filePath = "";
    if (pathname === "/i") {
      // Serve index.html when the root path is requested
      filePath = join(Deno.cwd(), UI_DIRECTORY, "index.html");
    } else {
      // Serve other files from the ui directory
      filePath = join(Deno.cwd(), UI_DIRECTORY, pathname);
    }

    const file = await Deno.readFile(filePath);
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
