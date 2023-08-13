import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="RavenAI - AI-Powered assistant for tattoo artists"
                description="Discover RavenAI, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Core Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Simplify Your Tattoo Inquiry Process with
                                RavenAI
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Hey there! Welcome to RavenAI, a
                                    customizable assistant built specifically
                                    for busy tattoo artists. It&apos;s super
                                    easy to set up. No programming skills
                                    required. Here are some key features:
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            {/* <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup> */}
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Managing inquiries doesn&apos;t have to suck
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p style={{ marginBottom: "2rem" }}>
                                    Be one of the first to know when RavenAI
                                    launches.
                                </p>
                                <a
                                    role="button"
                                    href="https://avenuelabs.lemonsqueezy.com/checkout/buy/df8ccd46-fa63-4384-b2aa-c4c9b8ad3ef0?embed=1"
                                    className="btn btn--secondary lemonsqueezy-button"
                                >
                                    Keep me in the loop
                                    <Icon icon="material-symbols:arrow-forward-rounded" />
                                </a>
                            </Content>
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
