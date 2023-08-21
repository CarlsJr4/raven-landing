import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
    // Cuztomize Meta Properties
    // Can create extra props and pass as arguments like title in case you want to change for each page.
    const metaDescription = description
        ? description
        : process.env.siteDescription;
    const metaKeywords = keywords ? keywords : process.env.siteKeywords;
    const siteURL = process.env.siteUrl;
    const twitterHandle = process.env.twitterHandle;
    const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`;

    return (
        <Head>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-LZCWD1ZEBF"
            ></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
											window.dataLayer = window.dataLayer || [];
											function gtag(){dataLayer.push(arguments);}
											gtag('js', new Date());

											gtag('config', 'G-LZCWD1ZEBF');
										`
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
													<!-- Meta Pixel Code -->
													!function(f,b,e,v,n,t,s)
													{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
													n.callMethod.apply(n,arguments):n.queue.push(arguments)};
													if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
													n.queue=[];t=b.createElement(e);t.async=!0;
													t.src=v;s=b.getElementsByTagName(e)[0];
													s.parentNode.insertBefore(t,s)}(window, document,'script',
													'https://connect.facebook.net/en_US/fbevents.js');
													fbq('init', '256719647295089');
													fbq('track', 'PageView');
										`
                }}
            />
            <noscript>
                <img
                    height="1"
                    width="1"
                    style="display:none"
                    src="https://www.facebook.com/tr?id=256719647295089&ev=PageView&noscript=1"
                />
            </noscript>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            {/* { Twitter } */}
            <meta
                name="twitte:card"
                content="summary_large_image"
                key="twcard"
            />
            <meta
                name="twitter:creator"
                content={twitterHandle}
                key="twhandle"
            />

            {/* {Open Graph} */}
            <meta property="og:url" content={siteURL} key="ogurl" />
            <meta property="og:image" content={imagePreview} key="ogimage" />
            <meta property="og:site_name" content={siteURL} key="ogsitename" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta
                property="og:description"
                content={metaDescription}
                key="ogdesc"
            />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            {/* Title */}
            <title>{title}</title>

            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
            <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

            <script
                src="https://assets.lemonsqueezy.com/lemon.js"
                defer
            ></script>
        </Head>
    );
};

export default SEO;
