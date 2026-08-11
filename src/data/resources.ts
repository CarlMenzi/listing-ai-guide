import type { Resource } from "./types";
import aiBasicsImg from "@/assets/cat-ai-basics.jpg";
import brandingImg from "@/assets/cat-branding.jpg";
import listingsImg from "@/assets/cat-listings.jpg";
import marketingImg from "@/assets/cat-marketing.jpg";
import communicationImg from "@/assets/cat-communication.jpg";
import productivityImg from "@/assets/cat-productivity.jpg";

export const resources: Resource[] = [
  {
    id: "ai-basics-for-realtors",
    slug: "ai-basics-for-realtors",
    title: "AI Basics for Realtors",
    description:
      "Understand what AI can and cannot do in a real estate business, and where it saves you the most time.",
    category: "AI Basics",
    level: "Beginner",
    resourceType: "Guide",
    tools: ["ChatGPT"],
    thumbnail: aiBasicsImg,
    thumbnailAlt: "Abstract network illustration representing artificial intelligence",
    createdAt: "2026-05-02",
    overview:
      "AI tools are best understood as a fast, tireless assistant who writes well, never gets tired of rewriting, and knows nothing about your market unless you tell it. This guide sets expectations so you can use AI confidently without putting your license or your reputation at risk.",
    whatYouWillLearn: [
      "Where AI genuinely saves time in a real estate workday",
      "The tasks you should never fully hand to AI",
      "How to give an AI tool enough context to be useful",
      "How to review AI output before it reaches a client",
    ],
    whatYouNeed: [
      "A free account with an AI assistant such as ChatGPT",
      "A recent listing, client email, or marketing task to practice on",
    ],
    steps: [
      {
        number: 1,
        title: "Know what AI is actually good at",
        content:
          "AI is strongest at first drafts, rewrites, summarizing, brainstorming, and reformatting information you already have. Writing a listing description from your notes, turning a long inspection summary into a client-friendly recap, or generating thirty caption ideas are all ideal tasks. It is weakest at facts it was never given: current inventory, HOA rules, contract deadlines, and local pricing. Assume any number or claim it produces on its own is wrong until you verify it.",
      },
      {
        number: 2,
        title: "Decide what stays human",
        content:
          "Never let AI make representations about property condition, price opinions, legal terms, or fair housing sensitive descriptions without your review. Do not paste client personal or financial information into a public AI tool. Advice, negotiation, and relationship work stay with you — AI handles the typing, not the judgment.",
      },
      {
        number: 3,
        title: "Give context before you ask",
        content:
          "The quality of what you get back is almost entirely determined by what you put in. Tell the tool who you are, who the audience is, what facts to use, what tone you want, and how long the output should be. A three-sentence request produces generic output; a short paragraph of context produces something you can actually send.",
      },
      {
        number: 4,
        title: "Review, edit, and make it sound like you",
        content:
          "Read every draft out loud before it goes out. Cut adjectives that overstate, replace anything you cannot verify, and add one specific detail only you would know. That last step is what keeps AI-assisted work from sounding like everyone else's.",
      },
    ],
    prompts: [
      {
        title: "AI Starting Point for Your Week",
        description:
          "Ask AI to map your own workload to the tasks it can realistically help with.",
        content:
          "You are helping a licensed real estate agent get practical value from AI. Here is what my typical week looks like: [describe your week — showings, listing appointments, follow-ups, marketing, admin].\n\nIdentify the 5 tasks where AI would save me the most time, ranked by hours saved. For each one, explain in two sentences what I would give the AI and what I would get back. Then list 3 tasks in my week that I should keep doing myself and explain why. Be specific to real estate and avoid generic productivity advice.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT"],
    relatedResources: ["write-better-ai-prompts", "generate-content-ideas"],
    tags: ["ai basics", "getting started", "fundamentals", "workflow"],
  },
  {
    id: "write-better-ai-prompts",
    slug: "write-better-ai-prompts",
    title: "How to Write Better AI Prompts",
    description:
      "A repeatable prompt formula that turns generic AI output into copy you can actually send to clients.",
    category: "AI Basics",
    level: "Beginner",
    resourceType: "Guide",
    tools: ["ChatGPT", "Claude"],
    thumbnail: aiBasicsImg,
    thumbnailAlt: "Abstract network illustration representing artificial intelligence",
    createdAt: "2026-05-04",
    overview:
      "Most disappointing AI output comes from a vague request. This guide gives you a five-part prompt structure you can reuse for every task in your business, plus the follow-up questions that turn a mediocre first draft into a finished piece.",
    whatYouWillLearn: [
      "The five components every strong prompt contains",
      "How to control tone, length, and format",
      "How to iterate instead of starting over",
      "How to save prompts you can reuse weekly",
    ],
    whatYouNeed: [
      "An AI assistant account",
      "A real task you need written this week",
    ],
    steps: [
      {
        number: 1,
        title: "Use the five-part structure",
        content:
          "Every strong prompt contains: (1) Role — who the AI should act as; (2) Task — exactly what to produce; (3) Context — the facts, audience, and situation; (4) Constraints — length, tone, format, what to avoid; (5) Output format — bullets, email, three options. Missing context and constraints is what produces bland copy.",
      },
      {
        number: 2,
        title: "Feed it real details",
        content:
          "Replace 'a nice 3-bedroom home' with the actual square footage, year built, standout features, neighborhood, and the buyer you imagine. AI cannot invent facts about your listing, so anything you leave out gets replaced with a cliché.",
      },
      {
        number: 3,
        title: "Ask for options, then refine",
        content:
          "Request three versions rather than one. Pick the closest and say what to change: 'Version 2, but shorter, warmer, and lead with the backyard.' Iterating beats rewriting the whole prompt, and each round gets closer to your voice.",
      },
      {
        number: 4,
        title: "Save what works",
        content:
          "When a prompt produces something you actually used, save it in a note with brackets where the details change. Over a few months you build a personal prompt library that makes recurring tasks nearly instant.",
      },
    ],
    prompts: [
      {
        title: "Universal Real Estate Prompt Template",
        description: "Fill in the brackets and reuse this for almost any writing task.",
        content:
          "Act as an experienced real estate marketing copywriter who writes for licensed agents.\n\nTASK: Write [what you need — e.g. a listing description, a follow-up email, 5 social captions].\n\nCONTEXT:\n- Audience: [who will read this]\n- Key facts: [addresses, features, numbers, dates, situation]\n- My voice: [warm and straightforward / polished and professional / friendly and local]\n\nCONSTRAINTS:\n- Length: [word or sentence count]\n- Avoid: hype words, exaggerated claims, anything I have not given you as a fact\n- Follow fair housing guidance: describe the property, never the ideal buyer\n\nOUTPUT: Give me 3 distinct versions, each labeled, with a one-line note on who each version is best for.",
        copyEnabled: true,
      },
      {
        title: "Refinement Prompt",
        description: "Use after the first draft to tighten the output.",
        content:
          "Take version [number] above. Keep the structure but: make it [shorter / warmer / more direct], lead with [the feature you want emphasized], remove any claim I did not give you as a fact, and rewrite it so it sounds like a person talking rather than marketing copy. Then list anything in the draft I should verify before publishing.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Claude"],
    relatedResources: ["ai-basics-for-realtors", "listing-descriptions"],
    tags: ["prompts", "ai basics", "writing", "getting started"],
  },
  {
    id: "ai-headshots",
    slug: "ai-headshots",
    title: "Create Studio-Quality Professional Headshots",
    description:
      "Create professional AI headshots using three simple photos taken with your phone.",
    category: "Personal Branding",
    level: "Beginner",
    resourceType: "Tutorial",
    tools: ["ChatGPT"],
    thumbnail: brandingImg,
    thumbnailAlt: "Professional studio headshot of a real estate agent on a gray backdrop",
    featured: true,
    isNew: true,
    createdAt: "2026-06-18",
    overview:
      "A current, professional headshot appears on your signs, your emails, your portal profiles, and every listing presentation. With three clear phone photos and an AI image generator you can produce a studio-quality portrait without booking a session.",
    whatYouWillLearn: [
      "How to take the three reference photos AI needs",
      "How to upload them to an AI image generator",
      "The prompt that produces a studio-quality, accurate result",
      "How to review the result so it still looks like you",
    ],
    whatYouNeed: [
      "3 clear photos: front view, left side view, right side view",
      "An AI image generator such as ChatGPT",
      "Your preferred professional style (attire, background, tone)",
    ],
    steps: [
      {
        number: 1,
        title: "Take three clear photos",
        content:
          "Take three photos with your phone in even, natural light — face a window rather than standing with it behind you. Capture one front view looking straight at the camera, one left side view, and one right side view. Keep a neutral expression, remove sunglasses and hats, and make sure your face is sharp and unobstructed in all three. Wear what you would actually wear to a listing appointment.",
      },
      {
        number: 2,
        title: "Upload your photos",
        content:
          "Open your AI image generator and start a new conversation. Upload all three photos together so the tool has front, left, and right references for your facial structure. More angles give the model more information, which is what keeps the result recognizable.",
      },
      {
        number: 3,
        title: "Copy and use the prompt",
        content:
          "Paste the prompt below with your photos. It asks for a professional headshot with accurate facial features, studio-quality photography, a 4:5 aspect ratio, and high resolution. Generate a few variations, then adjust one detail at a time — background tone, attire, or expression — rather than rewriting the whole prompt.",
      },
      {
        number: 4,
        title: "Review before you publish",
        content:
          "Compare the result side by side with your reference photos. Check that facial features, skin tone, hair, and age read accurately — a headshot that does not look like the person who shows up to the appointment works against you. Regenerate if anything looks smoothed, altered, or artificial, then download at full resolution for your profile, signage, and email signature.",
      },
    ],
    prompts: [
      {
        title: "Professional Headshot Prompt",
        description: "Use with your three uploaded reference photos.",
        content:
          "Using the three uploaded reference photos of me (front view, left side view, and right side view), create a studio-quality professional headshot.\n\nRequirements:\n- Maintain accurate facial features, skin tone, hair, and age exactly as shown in the reference photos\n- Professional photography quality with soft, flattering studio lighting\n- Clean, neutral studio background\n- Professional business attire appropriate for a real estate professional\n- Natural, confident expression and relaxed posture\n- Sharp focus on the face, shallow depth of field\n- 4:5 aspect ratio\n- High resolution\n\nDo not alter my facial structure, features, or proportions. The result should look like a real photograph taken by a professional portrait photographer.",
        copyEnabled: true,
      },
      {
        title: "Style Variation Prompt",
        description: "Generate an alternate look once you have a version you like.",
        content:
          "Keep the same face, facial features, and likeness exactly as in the previous image. Create one variation with [a warm light gray background / a dark charcoal background / a softly blurred modern office background] and [a navy blazer over a white shirt / business casual attire]. Same studio-quality lighting, same 4:5 aspect ratio, high resolution.",
        copyEnabled: true,
      },
    ],
    examples: [
      {
        label: "Phone photo to studio headshot",
        before: {
          src: communicationImg,
          alt: "Casual reference photo taken with a phone in an office",
          caption: "Before — casual phone photo",
        },
        after: {
          src: brandingImg,
          alt: "Studio-quality AI generated professional headshot",
          caption: "After — AI studio headshot",
        },
      },
    ],
    recommendedTools: ["ChatGPT", "Canva"],
    pdfUrl: "/guides/ai-headshots-guide.pdf",
    relatedResources: ["agent-bio", "social-captions", "write-better-ai-prompts"],
    tags: [
      "headshots",
      "personal branding",
      "images",
      "profile photo",
      "photography",
    ],
  },
  {
    id: "agent-bio",
    slug: "agent-bio",
    title: "Create an Agent Bio with AI",
    description:
      "Write a bio that sounds like you and gives buyers and sellers a reason to call.",
    category: "Personal Branding",
    level: "Beginner",
    resourceType: "Guide",
    tools: ["ChatGPT"],
    thumbnail: brandingImg,
    thumbnailAlt: "Professional headshot of a real estate agent",
    createdAt: "2026-05-20",
    overview:
      "Most agent bios list years in the business and end there. A strong bio answers a different question: why should this specific client trust you with the largest transaction of their life? AI can produce three versions in a minute — your job is to supply the raw material only you have.",
    whatYouWillLearn: [
      "What information makes a bio persuasive rather than generic",
      "How to produce long, short, and one-line versions at once",
      "How to adapt the bio for portals, social, and print",
    ],
    whatYouNeed: [
      "Your background, service areas, and specialties",
      "2-3 real client outcomes or situations you handle well",
      "Any credentials, designations, or community involvement",
    ],
    steps: [
      {
        number: 1,
        title: "Collect your raw material",
        content:
          "Before opening any AI tool, jot down: how long you have been licensed, the neighborhoods you know best, the client types you serve most (first-time buyers, relocations, downsizers, investors), two or three situations you have handled well, what you did before real estate, and one personal detail that makes you memorable locally.",
      },
      {
        number: 2,
        title: "Generate three lengths at once",
        content:
          "Ask for a long version for your website, a short version for portals and MLS profiles, and a one-line version for social bios and email signatures. Getting all three from the same source keeps your presence consistent everywhere.",
      },
      {
        number: 3,
        title: "Cut the clichés",
        content:
          "Delete phrases like 'passionate about real estate,' 'goes above and beyond,' and 'client-focused' — every competing agent uses them. Replace each one with a specific fact: a neighborhood you have sold in for a decade, the fact that you answer texts within the hour, the school district you can speak to firsthand.",
      },
      {
        number: 4,
        title: "Publish everywhere and keep it current",
        content:
          "Update your website, brokerage profile, MLS agent profile, portal profiles, and social accounts on the same day so the copy stays consistent. Revisit it once a year or whenever your specialty shifts.",
      },
    ],
    prompts: [
      {
        title: "Agent Bio Prompt",
        content:
          "Act as a copywriter who writes bios for real estate professionals.\n\nWrite my agent bio using only these facts:\n- Name and market: [name, city/neighborhoods]\n- Years licensed: [number]\n- Clients I serve best: [first-time buyers / relocations / luxury / investors / downsizers]\n- What I do well, with examples: [2-3 specific situations or outcomes]\n- Background before real estate: [prior career or relevant experience]\n- Credentials/designations: [list or write none]\n- Community connection: [what makes me local]\n\nGive me three versions:\n1. Long (150-200 words) for my website\n2. Short (60-80 words) for portal and MLS profiles\n3. One line (under 20 words) for social bios and my email signature\n\nWrite in first person, warm and professional. Do not use the phrases 'passionate about real estate,' 'above and beyond,' or 'client-focused.' Do not invent any facts I did not provide.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Canva"],
    relatedResources: ["ai-headshots", "social-captions", "content-plan"],
    tags: ["bio", "personal branding", "profile", "writing", "about me"],
  },
  {
    id: "listing-descriptions",
    slug: "listing-descriptions",
    title: "Write Better Listing Descriptions with AI",
    description:
      "Turn property facts and your walkthrough notes into MLS copy that reads well and stays compliant.",
    category: "Listings",
    level: "Beginner",
    resourceType: "Guide",
    tools: ["ChatGPT"],
    thumbnail: listingsImg,
    thumbnailAlt: "Modern luxury home exterior photographed at dusk",
    featured: false,
    isNew: true,
    createdAt: "2026-06-10",
    overview:
      "A listing description has one job: make the right buyer want to see the home in person. AI can turn your bullet-point notes into clean, readable copy in seconds, but only if you give it the details that make this property different from the three others on the same street.",
    whatYouWillLearn: [
      "What to capture during your walkthrough so the copy writes itself",
      "How to get MLS-length and portal-length versions at once",
      "How to keep descriptions fair housing compliant",
      "How to review AI copy for claims you cannot support",
    ],
    whatYouNeed: [
      "Property facts: beds, baths, square footage, lot, year built",
      "Recent updates with dates",
      "Your walkthrough notes on what stands out",
      "MLS character limit for your board",
    ],
    steps: [
      {
        number: 1,
        title: "Capture the details on site",
        content:
          "During your walkthrough, note the three things a buyer will remember: the light in the main room at a particular time of day, the finished basement, the mature trees, the layout that works for a family who works from home. Also record every recent update with a date — a roof replaced in 2023 is a selling point, 'updated' is not.",
      },
      {
        number: 2,
        title: "Write the prompt with real facts",
        content:
          "Paste the full fact list, not a summary. Tell the AI who the likely buyer is based on the home and the neighborhood, and state your MLS character limit. Ask for a strong opening line — most buyers read the first sentence and the photos, nothing else.",
      },
      {
        number: 3,
        title: "Check compliance before anything else",
        content:
          "Fair housing rules describe the property, never the buyer. Remove anything referencing family status, religion, ethnicity, disability, or 'perfect for' a type of person. Also remove square footage, school, or boundary claims you have not verified against a source you can cite.",
      },
      {
        number: 4,
        title: "Edit for voice and publish",
        content:
          "Cut hype adjectives down to one or two, make sure every sentence carries information, and read it aloud. Then reuse the same facts to generate the portal version, the social caption, and the open house copy so all your marketing stays consistent.",
      },
    ],
    prompts: [
      {
        title: "MLS Listing Description Prompt",
        content:
          "Act as a real estate copywriter producing MLS listing copy.\n\nPROPERTY FACTS:\n- Address/area: [neighborhood, city]\n- Beds/baths/sq ft/lot: [details]\n- Year built: [year]\n- Recent updates with dates: [list]\n- Standout features from my walkthrough: [list 3-5 specifics]\n- Likely buyer: [describe based on the home and location]\n- Price: [price]\n\nWrite the listing description in [character limit] characters or fewer. Open with one strong sentence about what makes this home different. Use short, readable sentences. Include the updates with their dates.\n\nRules:\n- Describe the property, never the type of person who should live there (fair housing)\n- Use only the facts I provided; do not invent features, schools, or measurements\n- Maximum two descriptive adjectives in the whole piece\n\nThen provide: a 250-character portal version, and a list of anything in the copy I should verify before publishing.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT"],
    relatedResources: ["listing-to-social", "open-house-marketing", "write-better-ai-prompts"],
    tags: ["listing", "mls", "copywriting", "listings", "description", "property"],
  },
  {
    id: "listing-to-social",
    slug: "listing-to-social",
    title: "Turn Listing Details Into Social Media Content",
    description:
      "One set of listing facts becomes a week of posts across Instagram, Facebook, and LinkedIn.",
    category: "Listings",
    level: "Beginner",
    resourceType: "Guide",
    tools: ["ChatGPT", "Canva"],
    thumbnail: listingsImg,
    thumbnailAlt: "Modern home exterior at dusk used for listing marketing",
    createdAt: "2026-05-28",
    overview:
      "Every listing you take is a week's worth of content you already paid for. Instead of posting one 'Just Listed' graphic and moving on, this workflow turns a single set of property facts into a sequence of posts that each show the home from a different angle.",
    whatYouWillLearn: [
      "How to break one listing into five distinct posts",
      "How to adapt tone per platform without rewriting",
      "How to pair each post with the right photo",
    ],
    whatYouNeed: [
      "Your listing facts and photo set",
      "Seller permission to market the property",
      "A design tool for the graphics",
    ],
    steps: [
      {
        number: 1,
        title: "Plan the five angles",
        content:
          "A listing supports at least five posts: the Just Listed announcement, a single standout feature, a neighborhood or lifestyle post, the open house invitation, and the status update (under contract or sold). Each post uses different photos and speaks to a different reason someone would care.",
      },
      {
        number: 2,
        title: "Generate the set in one pass",
        content:
          "Give the AI the property facts once and ask for all five posts together, each with the platform it suits and a note on which photo to pair with it. Generating them as a set keeps the sequence coherent rather than repetitive.",
      },
      {
        number: 3,
        title: "Adapt per platform",
        content:
          "Instagram rewards a strong first line and a short body. Facebook tolerates more detail and a direct question to drive comments. LinkedIn works better framed around the market or your process than the property itself. Ask for the same content in all three registers.",
      },
      {
        number: 4,
        title: "Build the graphics and schedule",
        content:
          "Drop your photos into a branded template, add the caption, and schedule the posts across the listing's first two weeks. Keep the announcement and the open house invite at least three days apart.",
      },
    ],
    prompts: [
      {
        title: "Listing to Social Content Prompt",
        content:
          "Act as a real estate social media manager.\n\nLISTING FACTS:\n- Neighborhood/city: [area]\n- Price: [price]\n- Beds/baths/sq ft: [details]\n- Standout features: [list 3-5]\n- Nearby lifestyle highlights: [parks, walkability, dining, commute]\n- Open house date/time: [if applicable]\n\nCreate 5 social posts from this listing:\n1. Just Listed announcement (Instagram)\n2. One standout feature spotlight (Instagram)\n3. Neighborhood/lifestyle post (Facebook)\n4. Open house invitation (Facebook)\n5. Market-angle post about this listing (LinkedIn)\n\nFor each post give me: the caption, 5-8 relevant hashtags where appropriate, and a one-line note on which photo to use. Keep captions under 120 words, avoid hype language, and describe the property rather than the ideal buyer.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Canva", "CapCut"],
    relatedResources: ["listing-descriptions", "social-captions", "open-house-marketing"],
    tags: ["listing", "social media", "marketing", "instagram", "content", "listings"],
  },
  {
    id: "open-house-marketing",
    slug: "open-house-marketing",
    title: "Create Open House Marketing Content",
    description:
      "Everything you need to fill an open house: invitations, posts, neighbor letters, and follow-up.",
    category: "Listings",
    level: "Beginner",
    resourceType: "Guide",
    tools: ["ChatGPT", "Canva"],
    thumbnail: listingsImg,
    thumbnailAlt: "Home exterior prepared for an open house",
    createdAt: "2026-05-22",
    overview:
      "Attendance at an open house is decided in the four days before it, not on the day. This resource generates the full promotion package in one pass so you can put it out on a schedule instead of scrambling the night before.",
    whatYouWillLearn: [
      "The full asset list an open house needs",
      "How to write a neighbor letter that gets read",
      "How to prepare follow-up messages before the event",
    ],
    whatYouNeed: [
      "Listing facts and open house date and time",
      "Photos of the property",
      "A sign-in method for capturing visitor details",
    ],
    steps: [
      {
        number: 1,
        title: "Generate the full package",
        content:
          "Ask for the social announcement, a reminder post for the day before, a neighbor letter or postcard, an email to your database, and a short script for the sign-in table. Producing them together keeps the message consistent across every channel.",
      },
      {
        number: 2,
        title: "Work the neighbors",
        content:
          "Neighbors are your highest-value audience: they know someone who wants to move to the street. The letter should invite them by name to a preview window and mention what the sale could mean for their own home value, without quoting a number you have not analyzed.",
      },
      {
        number: 3,
        title: "Post on a schedule",
        content:
          "Announce four days out, post a feature highlight two days out, remind the day before, and go live the morning of. Same listing, different angle each time.",
      },
      {
        number: 4,
        title: "Prepare follow-up in advance",
        content:
          "Write the follow-up messages before the event so you can send them the same evening while you are still fresh in the visitor's mind. Have three versions ready: interested buyer, casual neighbor, and unrepresented buyer who needs an agent.",
      },
    ],
    prompts: [
      {
        title: "Open House Promotion Package",
        content:
          "Act as a real estate marketing assistant.\n\nOPEN HOUSE DETAILS:\n- Address/neighborhood: [area]\n- Date and time: [details]\n- Price: [price]\n- Beds/baths/sq ft: [details]\n- Standout features: [list]\n- My name and contact: [details]\n\nCreate a complete promotion package:\n1. Social announcement post (4 days out)\n2. Feature highlight post (2 days out)\n3. Reminder post (day before)\n4. Neighbor letter, 150 words, inviting neighbors to a preview window\n5. Email to my database, subject line plus 120-word body\n6. A 3-sentence greeting script for the sign-in table\n\nKeep the tone warm and professional. Do not make claims about home values or market conditions that I have not provided.",
        copyEnabled: true,
      },
      {
        title: "Open House Follow-Up Messages",
        content:
          "Write three short follow-up messages to send the evening of my open house at [address]:\n1. To an interested buyer who spent real time in the home — reference [detail they liked] and offer a private showing\n2. To a neighbor who stopped by — friendly, no pressure, offer to answer questions about the local market\n3. To a buyer who is not yet working with an agent — explain briefly how I can help and suggest a short call\n\nEach under 90 words, conversational, one clear next step, no pressure language.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Canva"],
    relatedResources: ["listing-to-social", "buyer-follow-up-emails", "listing-descriptions"],
    tags: ["open house", "listings", "marketing", "neighbors", "follow-up"],
  },
  {
    id: "social-captions",
    slug: "social-captions",
    title: "Create Social Media Captions with AI",
    description:
      "Turn a listing, market update, or real estate topic into ready-to-use social media content.",
    category: "Marketing",
    level: "Beginner",
    resourceType: "Guide",
    tools: ["ChatGPT"],
    thumbnail: marketingImg,
    thumbnailAlt: "Laptop on a desk showing real estate marketing content",
    featured: false,
    isNew: true,
    createdAt: "2026-06-14",
    overview:
      "Captions are where most agents stall. The photo is ready, the post never goes up. This resource gives you a caption workflow that produces posts in your voice, with a hook that earns the first two seconds of attention.",
    whatYouWillLearn: [
      "How to write a first line that stops the scroll",
      "How to produce a batch of captions in one sitting",
      "How to keep your voice consistent across posts",
    ],
    whatYouNeed: [
      "The photo or topic you are posting about",
      "A sense of your audience: past clients, local followers, or referral partners",
    ],
    steps: [
      {
        number: 1,
        title: "Lead with the hook",
        content:
          "Only the first line is guaranteed to be read. Strong hooks state something specific and slightly surprising: 'This house sold in four days and it wasn't the price,' or 'Three things buyers asked about at every showing this month.' Weak hooks announce ('Check out this beautiful home!').",
      },
      {
        number: 2,
        title: "Give the AI your voice sample",
        content:
          "Paste two or three captions you have written yourself and ask the tool to match that rhythm and vocabulary. This single step is the difference between generic AI captions and posts that sound like your account.",
      },
      {
        number: 3,
        title: "Batch, don't drip",
        content:
          "Generate ten captions at once across different post types — listing, market, tip, local business, behind the scenes. Batching keeps your feed varied and removes the daily decision of what to post.",
      },
      {
        number: 4,
        title: "Edit and add the human detail",
        content:
          "Add one detail the AI could not know: the seller's reaction, the coffee shop you stopped at, what the inspector found. That is what makes a post feel like a person rather than a brand.",
      },
    ],
    prompts: [
      {
        title: "Social Caption Batch Prompt",
        content:
          "Act as a social media copywriter for a real estate agent.\n\nHere are 2 captions I wrote myself so you can match my voice:\n[paste caption 1]\n[paste caption 2]\n\nMy market: [city/neighborhoods]. My audience: [past clients, local followers, referral partners].\n\nWrite 10 Instagram captions across these types:\n- 2 listing posts\n- 2 local market observations\n- 2 buyer or seller tips\n- 2 local business or neighborhood spotlights\n- 2 behind-the-scenes from my week\n\nEach caption: a strong first-line hook, 60-100 words, one clear call to action, and 5 relevant hashtags. Match my voice from the samples. No hype language, no emojis unless my samples use them, and no market statistics I have not given you.",
        copyEnabled: true,
      },
      {
        title: "Single Caption Quick Prompt",
        content:
          "Write 3 Instagram caption options for this post: [describe the photo or topic]. My market is [city]. Each caption should open with a hook that is specific, not generic, run 50-80 words, and end with one clear call to action. Give me a short, a medium, and a longer storytelling version.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Canva"],
    relatedResources: ["content-plan", "generate-content-ideas", "listing-to-social"],
    tags: ["social media", "captions", "marketing", "instagram", "content"],
  },
  {
    id: "content-plan",
    slug: "content-plan",
    title: "Create a Monthly Social Media Content Plan",
    description:
      "Build a full month of posts in one sitting so you stop deciding what to post each morning.",
    category: "Marketing",
    level: "Intermediate",
    resourceType: "Guide",
    tools: ["ChatGPT", "Canva"],
    thumbnail: marketingImg,
    thumbnailAlt: "Desk with laptop showing a content marketing plan",
    createdAt: "2026-05-15",
    overview:
      "Consistency beats brilliance on social. A monthly plan built around recurring themes means you always know what goes up on Tuesday, and it takes about ninety minutes once a month instead of fifteen anxious minutes every day.",
    whatYouWillLearn: [
      "How to structure a month around content pillars",
      "How to build a realistic posting cadence you will keep",
      "How to batch captions and graphics efficiently",
    ],
    whatYouNeed: [
      "Your listings, events, and market data for the coming month",
      "A realistic count of posts per week you can sustain",
      "A design tool and a scheduler",
    ],
    steps: [
      {
        number: 1,
        title: "Define four content pillars",
        content:
          "Pick four recurring themes: listings and transactions, local market insight, buyer/seller education, and community or personal. Rotating pillars prevents your feed from becoming an unbroken wall of listings, which is the fastest way to lose non-client followers.",
      },
      {
        number: 2,
        title: "Set a cadence you can hold",
        content:
          "Three posts a week that actually happen beat a plan for daily posting you abandon in week two. Assign one pillar per posting day and keep the schedule identical every week.",
      },
      {
        number: 3,
        title: "Generate the calendar",
        content:
          "Give AI your pillars, cadence, market, and what is happening this month — listings, open houses, local events, seasonal themes. Ask for a dated calendar with the post type, the hook, the caption, and what visual is needed.",
      },
      {
        number: 4,
        title: "Batch produce and schedule",
        content:
          "Block ninety minutes: create the graphics for the month, paste the captions, schedule everything. Leave two open slots per week for anything timely, like a new listing or a market shift.",
      },
    ],
    prompts: [
      {
        title: "Monthly Content Calendar Prompt",
        content:
          "Act as a real estate content strategist.\n\nBuild a 4-week social media content calendar for me.\n\nCONTEXT:\n- Market: [city/neighborhoods]\n- Audience: [past clients, local followers, first-time buyers, etc.]\n- Posting cadence: [e.g. 3 posts per week, Tuesday/Thursday/Saturday]\n- Content pillars: listings and transactions, local market insight, buyer and seller education, community and personal\n- Happening this month: [listings, open houses, local events, seasonal themes]\n\nOUTPUT: A table with columns for Date, Pillar, Post Type, Hook (first line), Caption (60-100 words), and Visual Needed. Rotate the pillars evenly. Leave 2 flexible slots per week marked TIMELY. Do not include market statistics I have not provided.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Canva", "CapCut"],
    relatedResources: ["social-captions", "generate-content-ideas", "weekly-business-plan"],
    tags: ["content plan", "social media", "marketing", "calendar", "planning"],
  },
  {
    id: "generate-content-ideas",
    slug: "generate-content-ideas",
    title: "Generate Real Estate Content Ideas",
    description:
      "Never stare at a blank feed again — build a running bank of post ideas tied to your market.",
    category: "Marketing",
    level: "Beginner",
    resourceType: "Prompt",
    tools: ["ChatGPT", "Gemini"],
    thumbnail: marketingImg,
    thumbnailAlt: "Workspace with laptop used for planning real estate content",
    createdAt: "2026-05-08",
    overview:
      "Ideas run out faster than time does. This resource turns the questions your clients actually ask into a bank of thirty content ideas you can pull from whenever you need something to post.",
    whatYouWillLearn: [
      "How to mine your own inbox for content ideas",
      "How to generate ideas that are local rather than generic",
      "How to keep a running idea bank",
    ],
    whatYouNeed: [
      "A list of questions clients asked you recently",
      "Your market area and typical client type",
    ],
    steps: [
      {
        number: 1,
        title: "Start from real questions",
        content:
          "Scroll your last month of texts and emails and list every question a client asked. 'How long will this take?' 'Should I paint before listing?' 'Is now a bad time to buy?' Each one is a post, because if one client asked it, a hundred people are wondering it.",
      },
      {
        number: 2,
        title: "Add local specificity",
        content:
          "Generic real estate advice is everywhere. Tie each idea to your area: what a specific neighborhood's inventory looks like, what buyers moving to your town get wrong, which local improvements return value in your market.",
      },
      {
        number: 3,
        title: "Sort by effort",
        content:
          "Split ideas into quick posts you can shoot on your phone, medium posts needing a graphic, and larger pieces like a video or guide. Fill your calendar mostly with quick posts and schedule one larger piece a month.",
      },
    ],
    prompts: [
      {
        title: "30 Content Ideas Prompt",
        content:
          "Act as a real estate content strategist who knows that specific, local content outperforms generic advice.\n\nMy market: [city/neighborhoods]. My typical clients: [describe]. Questions clients asked me recently: [paste 5-10 real questions].\n\nGive me 30 content ideas grouped into:\n- 10 answers to the questions above\n- 10 local/neighborhood-specific ideas for my market\n- 5 behind-the-scenes ideas from an agent's actual workday\n- 5 seasonal ideas for [current season]\n\nFor each idea give: the hook (first line), the format (photo post, carousel, short video, story), and the effort level (quick / medium / larger project). No generic advice that would apply to any market in the country.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Gemini"],
    relatedResources: ["content-plan", "social-captions", "listing-to-social"],
    tags: ["content ideas", "marketing", "social media", "brainstorming", "prompt"],
  },
  {
    id: "buyer-follow-up-emails",
    slug: "buyer-follow-up-emails",
    title: "Buyer Follow-Up Emails with AI",
    description:
      "Write follow-ups that feel personal and move a buyer forward without sounding like pressure.",
    category: "Client Communication",
    level: "Beginner",
    resourceType: "Guide",
    tools: ["ChatGPT"],
    thumbnail: communicationImg,
    thumbnailAlt: "Two professionals meeting in a modern office",
    isNew: true,
    createdAt: "2026-06-06",
    overview:
      "Most buyer leads go cold because nobody followed up a fourth time. AI removes the friction — you supply the specifics of the conversation and get a message that references what actually happened rather than a template.",
    whatYouWillLearn: [
      "A follow-up sequence for a buyer who has gone quiet",
      "How to reference specifics so the email feels personal",
      "How to end every message with one clear next step",
    ],
    whatYouNeed: [
      "Notes from your last conversation or showing",
      "The buyer's stated criteria and timeline",
      "Anything new to share: a listing, a rate change, a price drop",
    ],
    steps: [
      {
        number: 1,
        title: "Always lead with a reason to write",
        content:
          "'Just checking in' gives the reader nothing. A new listing that matches their criteria, a price reduction on a home they toured, a change in rates, or an answer to a question they raised all give the email a purpose and make the follow-up welcome rather than nagging.",
      },
      {
        number: 2,
        title: "Feed the AI your notes, not a summary",
        content:
          "Give it the details: which homes they saw, what they said about each, their timeline, their hesitation. The specificity of the output is limited by the specificity of the input, and a buyer notices immediately when an email could have been sent to anyone.",
      },
      {
        number: 3,
        title: "Build the sequence, not one email",
        content:
          "Ask for the whole sequence at once — day 2, day 7, day 21, and day 45 — each with a different reason to reach out and a decreasing level of intensity. Schedule them so the follow-up happens whether or not you remember.",
      },
      {
        number: 4,
        title: "Personalize and send",
        content:
          "Before sending, add one sentence only you could write. Keep each email under 150 words with a single question at the end — one question gets answered, three get ignored.",
      },
    ],
    prompts: [
      {
        title: "Buyer Follow-Up Sequence",
        content:
          "Act as a real estate agent writing follow-up emails to a buyer client.\n\nCONTEXT:\n- Buyer name and situation: [details]\n- What they are looking for: [criteria, price range, area]\n- Timeline: [when they want to move]\n- Last interaction: [what happened, what they said, which homes they saw]\n- Their hesitation: [what is holding them back]\n- New information I can share: [new listing, price change, rate change, market note]\n\nWrite a 4-email follow-up sequence for day 2, day 7, day 21, and day 45. Each email needs:\n- A subject line under 50 characters\n- Under 150 words\n- A genuine reason for the email, not 'just checking in'\n- A specific reference to our conversation\n- Exactly one question or next step at the end\n\nTone: warm, professional, no pressure, no hype. Do not state market statistics I have not provided.",
        copyEnabled: true,
      },
      {
        title: "After-Showing Follow-Up",
        content:
          "Write a short follow-up email to send the evening after showing homes to [buyer name]. We saw [list homes and their reaction to each]. Their main criteria are [criteria]. Under 130 words, warm and conversational, recap what we learned about what they want, and end with one clear next step.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Claude"],
    relatedResources: ["seller-update-emails", "rewrite-client-messages", "open-house-marketing"],
    tags: ["email", "buyers", "follow-up", "client communication", "leads"],
  },
  {
    id: "seller-update-emails",
    slug: "seller-update-emails",
    title: "Seller Update Emails with AI",
    description:
      "Keep sellers informed and calm with weekly updates that report activity honestly.",
    category: "Client Communication",
    level: "Beginner",
    resourceType: "Guide",
    tools: ["ChatGPT"],
    thumbnail: communicationImg,
    thumbnailAlt: "Real estate professionals discussing an update in an office",
    createdAt: "2026-05-25",
    overview:
      "Most listing relationships break down over silence, not price. A consistent weekly update — even in a slow week — keeps the seller's trust and makes the eventual price conversation far easier because the data has been in front of them all along.",
    whatYouWillLearn: [
      "What belongs in a weekly seller update",
      "How to deliver slow-activity news without losing confidence",
      "How to lead into a price conversation with evidence",
    ],
    whatYouNeed: [
      "Showing count and feedback for the week",
      "Online views or portal activity if available",
      "Competing listings and any status changes nearby",
    ],
    steps: [
      {
        number: 1,
        title: "Send on the same day every week",
        content:
          "Pick a day and never miss it. Predictability itself reduces anxiety; a seller who knows Friday's update is coming does not call on Wednesday.",
      },
      {
        number: 2,
        title: "Report activity, feedback, and market context",
        content:
          "Three sections: what happened this week (showings, inquiries, online activity), what people said (grouped feedback themes, not individual complaints), and what changed in the market nearby (new listings, price drops, pendings). End with what you are doing next week.",
      },
      {
        number: 3,
        title: "Be straight about slow weeks",
        content:
          "A slow week reported honestly builds more credibility than an upbeat email with nothing behind it. State the numbers, note what they suggest, and propose an action — refreshed photos, a marketing push, or a pricing discussion.",
      },
      {
        number: 4,
        title: "Set up the price conversation with data",
        content:
          "When showings stall, use the accumulated weeks of data rather than an opinion. AI can shape the message; the evidence and the recommendation have to come from you.",
      },
    ],
    prompts: [
      {
        title: "Weekly Seller Update Email",
        content:
          "Act as a listing agent writing a weekly update to my seller.\n\nTHIS WEEK:\n- Property: [address/area], listed [date] at [price]\n- Showings this week: [number]\n- Online views/saves: [numbers if available]\n- Feedback themes: [summarize what buyers said]\n- Market changes nearby: [new listings, price reductions, pendings, sold]\n- What I did this week: [marketing activity]\n- What I am doing next week: [planned activity]\n\nWrite a clear, organized update email under 250 words with short sections and a subject line. Be honest about the activity level without being discouraging. End with a recommendation and one question for the seller. Use only the numbers I provided.",
        copyEnabled: true,
      },
      {
        title: "Price Adjustment Conversation Email",
        content:
          "Write an email to my seller at [address] recommending a price adjustment. Evidence: listed [number] days ago at [price], [number] total showings, feedback themes are [summary], comparable homes at [price points] have [sold/gone pending], and [number] new competing listings came on nearby.\n\nUnder 250 words. Lead with the data, not the recommendation. Be direct and respectful, avoid blame, present the adjustment as a strategic response to what the market has told us, and end by proposing a short call this week.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Claude"],
    relatedResources: ["buyer-follow-up-emails", "rewrite-client-messages", "meeting-notes"],
    tags: ["email", "sellers", "listings", "client communication", "updates"],
  },
  {
    id: "rewrite-client-messages",
    slug: "rewrite-client-messages",
    title: "Rewrite Client Messages Professionally",
    description:
      "Turn a frustrated first draft into a calm, professional message that protects the relationship.",
    category: "Client Communication",
    level: "Beginner",
    resourceType: "Prompt",
    tools: ["ChatGPT", "Claude"],
    thumbnail: communicationImg,
    thumbnailAlt: "Professional conversation in a bright office setting",
    createdAt: "2026-05-11",
    overview:
      "Deals get tense. The message you want to send at 9pm after a difficult inspection negotiation is rarely the message that should go out. AI is a fast, unemotional editor that keeps your position intact while removing the tone that would cost you.",
    whatYouWillLearn: [
      "How to rewrite a heated message without losing your point",
      "How to deliver bad news clearly and kindly",
      "How to simplify jargon for first-time clients",
    ],
    whatYouNeed: [
      "Your unfiltered draft",
      "The outcome you want from the message",
      "Any facts that must stay in exactly as written",
    ],
    steps: [
      {
        number: 1,
        title: "Write the honest draft first",
        content:
          "Type what you actually think, uncensored, in a private note — never in the live email window where a stray keystroke sends it. Getting it out makes the edit easier, and the raw version usually contains the real point.",
      },
      {
        number: 2,
        title: "State the outcome you want",
        content:
          "Tell the AI what needs to happen after the message is read: the client agrees to an extension, the other agent responds by Friday, the seller understands the repair request. Rewriting without a target produces something polite and useless.",
      },
      {
        number: 3,
        title: "Protect the facts",
        content:
          "Mark any dates, dollar amounts, or contract terms that must appear verbatim, and check them again in the rewrite. A softened tone must never soften a deadline.",
      },
      {
        number: 4,
        title: "Read it once more as the recipient",
        content:
          "Before sending, read it as the person receiving it. If any line would make you defensive, rewrite that line. Then send.",
      },
    ],
    prompts: [
      {
        title: "Professional Rewrite Prompt",
        content:
          "Rewrite the message below so it is calm, professional, and effective, while keeping my position and every fact intact.\n\nMY DRAFT:\n[paste your unfiltered draft]\n\nRECIPIENT: [client / cooperating agent / lender / seller]\nWHAT I NEED TO HAPPEN: [the outcome]\nFACTS THAT MUST STAY EXACTLY AS WRITTEN: [dates, amounts, terms]\n\nRequirements: remove frustration and blame, keep the message direct rather than passive, stay under [word count] words, and end with one clear request and a deadline. Then list anything in my draft that could create liability or be misread, so I can check it before sending.",
        copyEnabled: true,
      },
      {
        title: "Explain It Simply Prompt",
        content:
          "Rewrite this for a first-time [buyer/seller] with no real estate experience: [paste the jargon-heavy text — inspection report summary, contract clause, lender requirement].\n\nUse plain language, no industry acronyms, keep every fact and deadline accurate, and organize it as: what this means, why it matters, and what you need to do next. Under 200 words. Flag anything I should have an attorney or lender confirm.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Claude"],
    relatedResources: ["buyer-follow-up-emails", "seller-update-emails", "meeting-notes"],
    tags: ["email", "rewrite", "tone", "client communication", "negotiation", "prompt"],
  },
  {
    id: "meeting-notes",
    slug: "meeting-notes",
    title: "Summarize Meeting Notes with AI",
    description:
      "Turn messy notes from a listing appointment or buyer consult into a clean recap and task list.",
    category: "Productivity",
    level: "Beginner",
    resourceType: "Tutorial",
    tools: ["ChatGPT", "Gemini"],
    thumbnail: productivityImg,
    thumbnailAlt: "Weekly planner, phone and coffee on a clean desk",
    createdAt: "2026-05-18",
    overview:
      "The details from a listing appointment fade within a day. A two-minute AI summary produces a client-ready recap and your own task list, which also creates a written record of what was agreed.",
    whatYouWillLearn: [
      "How to capture notes that summarize well",
      "How to split a summary into a client recap and an internal task list",
      "How to confirm agreements in writing without sounding formal",
    ],
    whatYouNeed: [
      "Your raw notes, typed or dictated",
      "Client names and the purpose of the meeting",
    ],
    steps: [
      {
        number: 1,
        title: "Capture notes in any form",
        content:
          "Type fragments or dictate a voice memo into your phone's transcription right after the meeting while you are still in the car. Do not try to write neatly — AI handles messy input well, but it cannot recover what you never captured.",
      },
      {
        number: 2,
        title: "Ask for two outputs",
        content:
          "Request a client-facing recap email and a private internal summary with action items, owners, and deadlines. The two audiences need different things from the same conversation.",
      },
      {
        number: 3,
        title: "Verify the commitments",
        content:
          "Check every date, dollar amount, and promise against your notes. If the AI inferred something you did not say, delete it — an inaccurate recap creates an expectation you did not agree to.",
      },
      {
        number: 4,
        title: "Send the recap same day",
        content:
          "Sending the recap within a few hours is a small act of professionalism that clients notice, and it confirms the agreements while everyone still remembers the conversation.",
      },
    ],
    prompts: [
      {
        title: "Meeting Notes Summary Prompt",
        content:
          "Act as an assistant to a real estate agent.\n\nMEETING TYPE: [listing appointment / buyer consultation / client check-in]\nATTENDEES: [names]\nRAW NOTES:\n[paste your messy notes or voice-memo transcript]\n\nProduce two outputs:\n\n1. CLIENT RECAP EMAIL — under 200 words, warm and professional, summarizing what we discussed, what was decided, and what happens next.\n\n2. INTERNAL SUMMARY — bullet points covering: client goals, timeline, budget or price expectations, concerns raised, decisions made, and an action list with owner and due date for each item.\n\nUse only what is in my notes. Mark anything ambiguous as 'NEEDS CONFIRMATION' rather than guessing.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Gemini"],
    relatedResources: ["weekly-business-plan", "seller-update-emails", "rewrite-client-messages"],
    tags: ["notes", "productivity", "summary", "meetings", "admin"],
  },
  {
    id: "weekly-business-plan",
    slug: "weekly-business-plan",
    title: "Create a Weekly Business Plan with AI",
    description:
      "Turn your pipeline and goals into a realistic weekly schedule that protects prospecting time.",
    category: "Productivity",
    level: "Intermediate",
    resourceType: "Guide",
    tools: ["ChatGPT"],
    thumbnail: productivityImg,
    thumbnailAlt: "Weekly planner and phone arranged on a desk",
    createdAt: "2026-05-30",
    overview:
      "A real estate week fills itself with whatever is loudest. Planning it on Sunday against your actual pipeline is what keeps lead generation from being the thing that gets cut every time a showing runs long.",
    whatYouWillLearn: [
      "How to plan a week around your pipeline instead of your inbox",
      "How to protect time-blocked prospecting",
      "How to build a Friday review that improves the next week",
    ],
    whatYouNeed: [
      "Your current pipeline: active clients, listings, pending deals",
      "Fixed commitments already on the calendar",
      "Your goals for the quarter",
    ],
    steps: [
      {
        number: 1,
        title: "Inventory the pipeline",
        content:
          "List every active buyer, listing, pending transaction, and warm lead, with the single next action each one needs. Most weeks feel overwhelming because this list lives in your head instead of on paper.",
      },
      {
        number: 2,
        title: "Block the non-negotiables first",
        content:
          "Place prospecting and follow-up blocks on the calendar before anything else, then fit showings and appointments around them. Everything reactive expands to fill whatever is left, so it has to go second.",
      },
      {
        number: 3,
        title: "Generate the schedule",
        content:
          "Give AI your pipeline, fixed commitments, and goals, and ask for a day-by-day plan with time blocks and the three outcomes that define a successful week. A plan with only tasks and no outcomes produces a busy week with no progress.",
      },
      {
        number: 4,
        title: "Review on Friday",
        content:
          "Spend ten minutes on Friday noting what got done, what slipped, and why. Feed that into next week's plan — after a month you will know exactly how much you can realistically fit into a week.",
      },
    ],
    prompts: [
      {
        title: "Weekly Business Plan Prompt",
        content:
          "Act as a real estate business coach helping me plan my week.\n\nMY PIPELINE:\n- Active buyers: [list with next action]\n- Active listings: [list with next action]\n- Pending transactions: [list with deadlines]\n- Warm leads needing follow-up: [list]\n\nFIXED COMMITMENTS: [appointments, showings, meetings, personal]\nGOALS THIS QUARTER: [e.g. 2 new listings, 4 buyer consultations]\nHOURS AVAILABLE: [realistic working hours per day]\n\nBuild a Monday-to-Friday plan with time blocks. Protect a daily prospecting and follow-up block before anything reactive. For each day list the priority tasks in order. Then give me the 3 outcomes that would make this week a success, and flag anything in my pipeline at risk of slipping.",
        copyEnabled: true,
      },
      {
        title: "Friday Review Prompt",
        content:
          "Here is what I planned this week and what actually happened: [paste plan and results].\n\nAnalyze the gap. Identify the patterns causing tasks to slip, tell me which activities produced actual pipeline movement versus which felt productive but did not, and give me three specific adjustments for next week. Be direct.",
        copyEnabled: true,
      },
    ],
    recommendedTools: ["ChatGPT", "Gamma"],
    relatedResources: ["meeting-notes", "content-plan", "generate-content-ideas"],
    tags: ["planning", "productivity", "time management", "business plan", "goals"],
  },
];

export const getResourceBySlug = (slug: string) =>
  resources.find((r) => r.slug === slug);

export const categories = [
  "Marketing",
  "Listings",
  "Client Communication",
  "Personal Branding",
  "Lead Generation",
  "Productivity",
  "AI Basics",
] as const;

export const levels = ["Beginner", "Intermediate", "Advanced"] as const;
export const resourceTypes = ["Guide", "Tutorial", "Prompt"] as const;

export const allToolNames = Array.from(
  new Set(resources.flatMap((r) => r.tools)),
).sort();
