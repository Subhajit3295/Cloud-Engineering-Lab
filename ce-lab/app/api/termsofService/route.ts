import { NextResponse } from "next/server";

export async function GET() {
  const termsofService = [
    {
      id: "introduction",
      title: "Introduction",
      content:
        "Welcome to Cloud Engineering Lab. These terms and conditions outline the rules and regulations for the use of Cloud Engineering Lab's Website, located at cloudengineeringlab.com",
    },
    {
      id: "use-of-services",
      title: "Use of Services",
      content:
        "By accessing this website we assume you accept these terms and conditions. Do not continue to use Cloud Engineering Lab if you do not agree to take all of the terms and conditions stated on this page.",
    },
    {
      id: "user-accounts",
      title: "User Accounts",
      content:
        "If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.",
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content:
        "Cloud Engineering Lab and its original content, features and functionality are and will remain the exclusive property of Cloud Engineering Lab.",
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      content:
        "In no event shall Cloud Engineering Lab, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.",
    },
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      content:
        "Cloud Engineering Lab is committed to protecting your privacy. We only collect information about you if we have a reason to do so.",
    },
    {
      id: "modifications-to-terms",
      title: "Modifications to Terms",
      content:
        "Cloud Engineering Lab reserves the right to modify these Terms at any time. We do so by posting and drawing attention to the updated terms on the Site.",
    },
    {
      id: "termination",
      title: "Termination",
      content:
        "Cloud Engineering Lab may terminate your access to all or any part of the Website at any time, with or without cause, with or without notice, effective immediately.",
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content:
        "These Terms will be governed by and interpreted in accordance with the laws of the State of us, and you submit to the non-exclusive jurisdiction of the state and federal courts located in us for the resolution of any disputes.",
    },
    {
      id: "contact-us",
      title: "Contact Us",
      content:
        "If you have any questions about these Terms, please contact us.",
    },
  ];

  return NextResponse.json(termsofService, { status: 200 });
}
