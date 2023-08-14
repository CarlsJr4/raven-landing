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
                description="Discover RavenAI, the effortless way to handle repetitive tattoo inquiries."
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
                                Simplify Your Inquiries with RavenAI
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Hey there! Welcome to RavenAI, a
                                    customizable AI assistant built specifically
                                    for busy tattoo artists. It&apos;s super
                                    easy to set up. Automate as much or as
                                    little as you need. No programming skills
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
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Upcoming features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Seamless Integration
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Pair RavenAI with popular workflow
                                    solutions.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Jotform (coming soon)
                                        </CardHeader>
                                        <p>
                                            RavenAI will talk to your clients,
                                            gather necessary info, then compile
                                            the data and submit a form to your
                                            Jotform account in any format.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Acuity (coming soon)
                                        </CardHeader>
                                        <p>
                                            Eliminate the need for
                                            back-and-forth booking communication
                                            about your between you and your
                                            client by syncing your Acuity
                                            account data to RavenAI.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Managing inquiries doesn&apos;t have to suck
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p style={{ marginBottom: "2rem" }}>
                                    RavenAI is currently in early development.{" "}
                                    <br />
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
                                {/* <p
                                    style={{
                                        marginTop: "10px"
                                    }}
                                >
                                    (For suggestions and feedback, email
                                    carl.dungca@yahoo.com with subject: RavenAI)
                                </p> */}
                            </Content>
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
