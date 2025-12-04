import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'hibrlCv Resume.pdf');
    const data = await fs.promises.readFile(filePath);

    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': String(data.length),
        'Content-Disposition': 'attachment; filename="Hibritu_Diresss_CV.pdf"',
      },
    });
  } catch (err) {
    return new Response('File not found', { status: 404 });
  }
}
