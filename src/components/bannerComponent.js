import Banner from 'react-js-banner';

export default function BannerComponent(){
    const bannerCss = { color: "#FFF", backgroundColor: "blue", fontSize: 20 };

    return (
        < Banner
            title="X-MEME"
            css={bannerCss}
            showBanner={true}
        />
    )
}