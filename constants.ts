export const APP_CONTENT = {
  hero: {
    headline: "Stop Managing Tickets. Start Eliminating Them.",
    subHeadline: "An intelligent intervention layer that sits between your users and your support team. We use RAG-based AI to solve 50% of queries before the \"Submit Ticket\" button is even clicked.",
    cta: "View Deck",
    tagline: "The ticket you don't raise is the fastest one resolved."
  },
  problem: {
    title: "The \"Email Black Hole\"",
    text: "Today, support is reactive. Users email vaguely worded problems. Support agents waste days asking for screenshots, logs, and context. The result? High wait times, frustrated users, and a clogged helpdesk.",
    stat: "40% of support time is spent gathering information, not solving problems."
  },
  transitionBanner: {
    text: "Shifting the paradigm: From Reactive Support to Proactive Deflection."
  },
  solution: {
    steps: [
      {
        title: "Contextual Entry",
        description: "Users are guided to the App Portal. No more unstructured emails."
      },
      {
        title: "Real-Time Intelligence",
        description: "As the user types, our RAG Model (Vector Search) analyzes the intent against your entire knowledge base instantly."
      },
      {
        title: "The Smart Intercept",
        description: "Before a ticket can be submitted, the AI provides the exact solution."
      },
      {
        title: "The Review Window",
        description: "A \"Solution Review\" timer ensures users actually digest the AI response before escalating."
      },
      {
        title: "Sentiment Safety Valve",
        description: "AI detects \"Angry\" sentiment and bypasses the timer to prevent frustration."
      },
      {
        title: "Proactive Triage",
        description: "If a ticket must be raised, the AI ensures all logs and screenshots are attached before allowing submission."
      }
    ]
  },
  features: [
    {
      title: "RAG & Vector Search",
      description: "Uses semantic search, not just keywords, to understand what the user means, not just what they typed."
    },
    {
      title: "Sentiment Analysis",
      description: "Detects tone and urgency to route critical issues faster."
    },
    {
      title: "Pre-Submission Validation",
      description: "Ensures zero \"back-and-forth\" by demanding required data upfront."
    }
  ],
  impact: {
    metrics: [
      { label: "Reduction in Incoming Ticket Volume", value: "50-60%" },
      { label: "Wait Time for Common Queries", value: "0 Min" },
      { label: "\"Perfect Tickets\" for L1 Engineers", value: "100%" }
    ]
  },
  faq: [
    {
      question: "Won't the 2-minute wait timer frustrate urgent users?",
      answer: "Not at all. Our AI includes Sentiment Analysis. If the user's language indicates anger or extreme urgency, the system detects the \"Critical Tone,\" bypasses the wait timer immediately, and allows instant ticket creation."
    },
    {
      question: "What if the AI response is wrong?",
      answer: "The goal is assistance, not blocking. If the AI response doesn't solve the issue, the \"Create Ticket\" button becomes active. The user can then submit the ticket, but they must explain why the AI answer wasn't sufficient, providing better context for our engineers."
    },
    {
      question: "How does this strictly reduce ticket volume?",
      answer: "By filtering out \"How-to\" questions and simple configuration queries (which usually make up 30-50% of volume) via the RAG model. We only let complex, bug-related issues reach the human support team."
    },
    {
      question: "Does this replace the support team?",
      answer: "No, it empowers them. By forcing the system to check for logs and screenshots before submission, our engineers receive \"Perfect Tickets\" containing all necessary data, allowing them to skip the triage phase and start solving immediately."
    }
  ],
  footer: {
    text: "Hackathon Entry 2025. Built for Netcore's Internal IT Innovation."
  }
};