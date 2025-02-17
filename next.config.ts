import path from 'path';
import fs from 'fs';

import type { NextConfig } from 'next';

const isDevelopment = process.env.NEXT_PUBLIC_APP_ENV !== 'production';

const generateRobotsTxt = () => {
  const robotsContent = isDevelopment ? `User-agent: *\nDisallow: /` : `User-agent: *\nDisallow: /`; // после запроса маркетинга исправить

  const filePath = path.join(__dirname, 'public', 'robots.txt');
  fs.writeFileSync(filePath, robotsContent);
};

generateRobotsTxt();

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
