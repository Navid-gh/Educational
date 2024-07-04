import { ReactNode } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

type Props = {
  titleTemplate: string;
  description: string;
  Url: string;
  children?: ReactNode;
};

const SeoTags = ({ titleTemplate, description, Url, children }: Props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titleTemplate} | صابر زارعی</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={Url} />
        {children}
      </Helmet>
    </HelmetProvider>
  );
};

export default SeoTags;
