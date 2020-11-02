import Head from "next/head";
import { HTMLAttributes } from "react";

type Props = {
  title: string;
  description?: string;
};
type LayoutProps = Props & HTMLAttributes<HTMLElement>;

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  ...props
}) => (
  <div className="bg-gray-100 min-h-screen antialiased text-gray-900">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main {...props}>{children}</main>
  </div>
);

export default Layout;
