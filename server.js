//server.js
import { serve } from "https://deno.land/std@0.211.0/http/server.ts";
import { join } from "https://deno.land/std@0.211.0/path/mod.ts";
import { contentType } from "https://deno.land/std@0.211.0/media_types/mod.ts";

const PORT = 11111;
const ui_directory = "ui";

const client_config_script = (request) => {
  const client_device_corner_radius = parseFloat(
    request.headers.get("device_corner_radius") || "0",
  );

  return `
              <script>
                window.APP_CONFIG = {
                 client_device_corner_radius: ${client_device_corner_radius},
                };

              </script>
            </head>
            `;
};

const complete_response = async (file_path, request) => {
  let file_content = await Deno.readTextFile(file_path);
  const file_extension = file_path.split(".").pop();

  if (file_extension === "html") {
    file_content = file_content.replace(
      "</head>",
      client_config_script(request),
    );
  }

  const response_headers = new Headers({
    "content-type":
      contentType(`.${file_extension}`) || "application/octet-stream",
  });

  return new Response(file_content, {
    status: 200,
    headers: response_headers,
  });
};

const handle_request = async (request) => {
  const url = new URL(request.url);
  const path_name = url.pathname;

  try {
    let file_path = "";
    switch (path_name) {
      case "/i":
        file_path = join(Deno.cwd(), ui_directory, "i", "i.html");
        break;
      case "/a":
        file_path = join(Deno.cwd(), ui_directory, "a", "a.html");
        break;
      default:
        file_path = join(Deno.cwd(), ui_directory, path_name);
        console.log(path_name);

        break;
    }

    return await complete_response(file_path, request);
  } catch (error) {
    console.warn(`File not found: ${path_name}`);
    return new Response("Not Found", { status: 404 });
  }
};

console.log(`Server listening on port ${PORT}`);
await serve(handle_request, { port: PORT });
