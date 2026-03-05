"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureHoverPattern from "@/components/sections/feature/featureHoverPattern/FeatureHoverPattern";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TeamCardTen from "@/components/sections/team/TeamCardTen";
import TestimonialCardTwo from "@/components/sections/testimonial/TestimonialCardTwo";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterBase from "@/components/sections/footer/FooterBase";
import { BookOpen, Code, Award, Zap, MessageCircle, Briefcase, Lightbulb, Globe, Shield, Users, Cloud, Rocket, Target } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLarge"
      background="noiseDiagonalGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Members", id: "team" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Join Now", href: "contact" }}
          brandName="ComputeClub"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="ComputeClub"
          description="Join an exclusive community of computer enthusiasts, developers, and tech professionals dedicated to innovation, learning, and advancing technology together."
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Become a Member", href: "contact" },
            { text: "Learn More", href: "about" },
          ]}
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/business-graphs-performance-metrics-monitors-office_482257-126569.jpg"
          imageAlt="Computer club community workspace"
          frameStyle="browser"
          mediaAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          tag="Our Mission"
          title="Empowering Tech Minds"
          description="ComputeClub is a private community where computer professionals, enthusiasts, and innovators connect, collaborate, and grow together. We foster an environment dedicated to technical excellence and knowledge sharing."
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            {
              title: "Expert Network",              description: "Connect with experienced professionals from diverse tech backgrounds and industries",              icon: Users,
            },
            {
              title: "Knowledge Sharing",              description: "Access exclusive workshops, seminars, and learning resources curated for members",              icon: BookOpen,
            },
            {
              title: "Project Collaboration",              description: "Collaborate on innovative projects and build lasting professional relationships",              icon: Zap,
            },
            {
              title: "Member Benefits",              description: "Enjoy exclusive perks including discounts, early access to events, and networking opportunities",              icon: Award,
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/choosing-right-strategy_1098-1823.jpg"
          imageAlt="Members collaborating on technology projects"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttons={[{ text: "View Membership Plans", href: "#pricing" }]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureHoverPattern
          title="What We Offer"
          description="Discover the comprehensive benefits and exclusive features available to our members"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              icon: Code,
              title: "Technical Workshops",              description: "Monthly deep-dives into emerging technologies, programming languages, and best practices led by industry experts"},
            {
              icon: MessageCircle,
              title: "Discussion Forums",              description: "Engage in thoughtful conversations with fellow members about cutting-edge tech topics and industry trends"},
            {
              icon: Briefcase,
              title: "Career Networking",              description: "Build connections that lead to job opportunities, partnerships, and professional advancement"},
            {
              icon: Lightbulb,
              title: "Innovation Lab",              description: "Access shared resources and spaces to develop, test, and showcase your projects"},
            {
              icon: Globe,
              title: "Global Community",              description: "Connect with tech professionals worldwide and participate in international collaboration opportunities"},
            {
              icon: Shield,
              title: "Exclusive Content",              description: "Gain access to proprietary resources, research papers, and tools unavailable to the general public"},
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="By The Numbers"
          description="Our growing community continues to expand with dedicated members and impactful initiatives"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              value: "500+",              title: "Active Members Worldwide",              items: ["Members from 45+ countries", "Growing by 50+ monthly", "Diverse tech specializations"],
            },
            {
              id: "2",              value: "200+",              title: "Annual Events & Workshops",              items: ["Technical workshops monthly", "Annual conference", "Hackathons and competitions"],
            },
            {
              id: "3",              value: "95%",              title: "Member Satisfaction Rate",              items: ["High member retention", "Positive community feedback", "Continuous improvements"],
            },
            {
              id: "4",              value: "50+",              title: "Industry Partners",              items: ["Fortune 500 companies", "Tech startups & unicorns", "Educational institutions"],
            },
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTen
          title="Meet Our Leadership Team"
          tag="Steering the Future"
          tagAnimation="slide-up"
          membersAnimation="slide-up"
          members={[
            {
              id: "1",              name: "Dr. Marcus Chen",              imageSrc: "http://img.b2bpic.net/free-photo/inspiring-new-boss_1098-93.jpg",              imageAlt: "Dr. Marcus Chen"},
            {
              id: "2",              name: "Sarah Thompson",              imageSrc: "http://img.b2bpic.net/free-photo/blond-female-dressed-white-shirt-eyeglasses-holds-tablet-pc-grey-background_613910-14708.jpg",              imageAlt: "Sarah Thompson"},
            {
              id: "3",              name: "James Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-exhausted-workaholic-man-manager-typing-financial-strategy-using-laptop-computer-while-sitting-desk-table-business-company-office_482257-2321.jpg",              imageAlt: "James Rodriguez"},
            {
              id: "4",              name: "Emily Watson",              imageSrc: "http://img.b2bpic.net/free-photo/scientist-factory-using-tablet-check-photovoltaics-materials-parameters_482257-120526.jpg",              imageAlt: "Emily Watson"},
          ]}
          memberVariant="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Members Say"
          description="Real experiences and feedback from members who have transformed their careers and expanded their networks"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Alex Kim",              role: "Senior Software Engineer",              testimonial: "ComputeClub has been instrumental in my career growth. The networking opportunities and technical workshops have opened doors I never expected.",              imageSrc: "http://img.b2bpic.net/free-photo/pov-businessman-attending-videocall-meeting-office-using-online-videoconference-talk-consultant-about-financial-strategy-company-employee-chatting-remote-teleconference-close-up_482257-40929.jpg",              imageAlt: "Alex Kim",              icon: Code,
            },
            {
              id: "2",              name: "Jessica Martinez",              role: "Startup Founder",              testimonial: "The innovation lab and collaborative environment helped me develop and validate my startup idea. Highly recommend for any tech professional.",              imageSrc: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg",              imageAlt: "Jessica Martinez",              icon: Rocket,
            },
            {
              id: "3",              name: "David Patel",              role: "Cloud Architect",              testimonial: "The quality of discussions and expertise within the community is unmatched. This is where serious tech professionals come to elevate their skills.",              imageSrc: "http://img.b2bpic.net/free-photo/pov-businessman-attending-videocall-meeting-office-using-online-videoconference-talk-consultant-about-financial-strategy-company-employee-chatting-remote-teleconference-close-up_482257-40929.jpg",              imageAlt: "David Patel",              icon: Cloud,
            },
            {
              id: "4",              name: "Rachel Green",              role: "AI/ML Specialist",              testimonial: "Being part of ComputeClub connected me with mentors who guided me through my transition into AI. The support is incredible.",              imageSrc: "http://img.b2bpic.net/free-photo/blonde-businesswoman-portrait-with-copy-space_1194-633470.jpg",              imageAlt: "Rachel Green",              icon: Zap,
            },
            {
              id: "5",              name: "Thomas Anderson",              role: "Product Manager",              testimonial: "The industry insights and peer feedback have been invaluable for my product development. ComputeClub is a game-changer.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              imageAlt: "Thomas Anderson",              icon: Target,
            },
            {
              id: "6",              name: "Lisa Wong",              role: "DevOps Engineer",              testimonial: "Found my current role through a ComputeClub connection. The networking power of this community is exceptional.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-woman-engineer_23-2148826528.jpg",              imageAlt: "Lisa Wong",              icon: Users,
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about membership, benefits, and how to get involved"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "How do I join ComputeClub?",              content: "You can apply for membership through our website. We review applications based on your tech background and professional experience. Once approved, you'll receive instructions to activate your membership and access all member benefits."},
            {
              id: "2",              title: "What are the membership fees?",              content: "We offer flexible membership tiers to suit different needs. Basic membership includes access to forums and events. Premium membership adds exclusive workshops and the innovation lab. Enterprise membership is available for organizations."},
            {
              id: "3",              title: "Can I cancel my membership anytime?",              content: "Yes, you can cancel your membership anytime with 30 days notice. There are no long-term contracts or hidden fees. We want members who are genuinely engaged with our community."},
            {
              id: "4",              title: "What types of events do you host?",              content: "We host monthly technical workshops, quarterly networking events, an annual conference, hackathons, panel discussions, and collaborative project launches. Events are held both in-person and online for global accessibility."},
            {
              id: "5",              title: "Is there a job board for members?",              content: "Yes, members have access to our exclusive job board featuring opportunities from partner companies. We also host career mentoring sessions and conduct workshops on career advancement in tech."},
            {
              id: "6",              title: "Can I propose projects or workshops?",              content: "Absolutely! We encourage members to lead workshops, propose projects, and contribute content. Community-driven initiatives are the heart of ComputeClub. Contact our leadership team to get started."},
            {
              id: "7",              title: "What if I'm new to tech?",              content: "While ComputeClub is primarily for professionals, we welcome passionate learners with a genuine interest in technology. We offer beginner-friendly workshops and mentorship programs to help you grow."},
            {
              id: "8",              title: "Do you offer student memberships?",              content: "Yes, we offer discounted student memberships for full-time students. Student members get access to most community benefits, networking events, and learning resources at a reduced rate."},
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="ComputeClub"
          copyrightText="© 2025 ComputeClub. All rights reserved."
          columns={[
            {
              title: "Community",              items: [
                { label: "Members", href: "team" },
                { label: "Events", href: "#" },
                { label: "Discussions", href: "#" },
              ],
            },
            {
              title: "Resources",              items: [
                { label: "Workshops", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Documentation", href: "#" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Code of Conduct", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
