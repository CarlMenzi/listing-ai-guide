# Realtor AI Studio

# PROJECT: AI Academy for Realtors

Build a polished, premium, responsive internal web application called:

AI Academy for Realtors

This is an internal resource platform designed specifically for real estate agents.

IMPORTANT:

This is NOT a landing page.

This is NOT a marketing website.

This is NOT an LMS.

This is NOT a blog.

This is NOT a generic AI tools directory.

It is a practical, interactive AI resource center where real estate agents can:

1. Learn how AI can help them in their real estate business.

2. Find practical AI resources based on the task they need to accomplish.

3. Read step-by-step guides and tutorials.

4. Copy ready-to-use AI prompts.

5. Discover recommended AI tools.

6. Open external AI tools directly.

7. Download resource PDFs when available.

8. Search and filter resources.

9. Discover newly added resources.

The experience should feel like a premium internal product/tool created specifically for real estate professionals.

==================================================

# CORE PRODUCT PHILOSOPHY

==================================================

The platform should answer one fundamental question:

"What can AI help me do in my real estate business?"

The user experience should be:

TASK / NEED

    ↓

SEARCH OR BROWSE

    ↓

RESOURCE

    ↓

LEARN

    ↓

COPY / USE

    ↓

TAKE ACTION

Do NOT make the experience feel like browsing a giant library of random AI content.

Every resource should solve a real problem that a real estate agent might encounter.

Examples:

"I need to write a listing description."

"I need social media content."

"I need to follow up with a buyer."

"I need a professional headshot."

"I need to write a seller update email."

"I need ideas for my social media."

"I need to create marketing content from my listing."

==================================================

# TECHNOLOGY / ARCHITECTURE

==================================================

Build this as a modern responsive web application.

Use:

- React

- TypeScript

- Tailwind CSS

- shadcn/ui where appropriate

- Component-based architecture

- Clean reusable components

- Structured resource data

- Client-side search/filtering for the initial version

- Clean routing

- Responsive layouts

The architecture must be designed so that additional resources can easily be added later without rebuilding the interface.

Do NOT hardcode individual cards directly into the page layout.

Create a structured resource data model.

For example:

Resource:

- id

- slug

- title

- description

- category

- level

- resourceType

- tools

- thumbnail

- featured

- isNew

- overview

- whatYouWillLearn

- whatYouNeed

- steps

- prompts

- examples

- recommendedTools

- downloadablePdf

- relatedResources

- tags

The application should render resources dynamically from this structured data.

==================================================

# BRAND / VISUAL DIRECTION

==================================================

The existing design direction uses a sophisticated internal corporate aesthetic.

Maintain a professional LoKation-inspired visual language without making the application look like a generic SaaS dashboard.

Visual characteristics:

- Premium

- Clean

- Modern

- Corporate

- Minimal

- Professional

- Easy to scan

- Real-estate appropriate

- AI-forward but not overly futuristic

Use a restrained palette based around:

- Deep navy / charcoal

- White

- Soft gray

- Light neutral backgrounds

- Subtle blue accents

- Muted green for beginner labels

- Muted amber for intermediate

- Muted red/orange for advanced

Do not use excessive gradients.

Do not use neon colors.

Do not make it look like a gaming AI application.

Do not use excessive glassmorphism.

Cards should have:

- Rounded corners

- Subtle borders

- Subtle shadows

- High-quality imagery

- Strong typography hierarchy

- Clear metadata

- Obvious CTA

The overall feeling should be:

"Premium internal resource center."

==================================================

# GLOBAL NAVIGATION

==================================================

Keep navigation simple.

Desktop navigation:

[LoKation / AI Academy logo]

Home

Resources

Prompt Library

Tools

What's New

Right side:

Search icon / search field

Do NOT add:

- User profile

- Account management

- Notifications

- Progress tracking

- Gamification

- Workflows

There is no authentication requirement for V1.

Mobile navigation should collapse into a clean mobile menu.

==================================================

# HOMEPAGE

==================================================

Create a homepage that acts as the main dashboard for the Academy.

Do NOT overload the homepage.

The homepage should have the following structure:

--------------------------------------------------

HEADER

--------------------------------------------------

Top navigation.

Logo:

AI Academy for Realtors

Small supporting text if appropriate:

Practical AI resources for real estate professionals.

--------------------------------------------------

HERO / SEARCH

--------------------------------------------------

Large headline:

AI Academy for Realtors

Supporting copy:

Practical AI guides, prompts, and tools designed to help real estate professionals work smarter, create faster, and get more done.

Primary search interface:

"What are you trying to accomplish?"

Placeholder:

Search resources, prompts, or topics...

The search should actually work.

When the user types:

listing

the interface should return relevant resources.

When the user types:

email

return communication-related resources.

When the user types:

social media

return relevant marketing resources.

Search should search:

- title

- description

- category

- tags

- tools

- resource content where practical

Show a clear empty state if nothing matches.

--------------------------------------------------

NEW TO AI?

--------------------------------------------------

Create a compact section:

New to AI?

Start with these resources.

Show 3 beginner resources.

Example:

1. AI Basics for Realtors

2. How to Write Better AI Prompts

3. 10 Practical Ways Realtors Can Use AI

CTA:

Explore All Resources →

This section should help new users understand where to start without turning the platform into an LMS.

--------------------------------------------------

BROWSE BY NEED

--------------------------------------------------

Create clickable category cards.

Heading:

What can AI help you with?

Categories:

Marketing

Listings

Client Communication

Personal Branding

Lead Generation

Productivity

Each category card must be clickable.

Clicking a category should navigate to the Resources page with the appropriate filter already applied.

Example:

/resources?category=marketing

Do NOT create separate static pages for every category unless needed.

--------------------------------------------------

FEATURED RESOURCE

--------------------------------------------------

Create a featured resource area.

Example:

Featured Resource

Create Studio-Quality Professional Headshots

Create professional AI headshots using simple photos taken with your phone.

Category:

Personal Branding

Level:

Beginner

CTA:

Explore Guide →

The featured resource must link to the actual resource page/modal.

--------------------------------------------------

ALL RESOURCES

--------------------------------------------------

Show the main resource grid.

Heading:

All Resources

Supporting text:

Practical guides and prompts built for real estate professionals.

Include filters:

All Categories

All Levels

All Tools

And sorting:

Newest

A-Z

Filters must actually work.

Do not create decorative filter dropdowns that do nothing.

--------------------------------------------------

LATEST UPDATES

--------------------------------------------------

Create a compact "Latest Updates" section or sidebar.

Show recently added resources.

Each item should be clickable.

--------------------------------------------------

PROMPT HIGHLIGHT

--------------------------------------------------

Show a small section:

Quick Prompts

Display 3-5 useful prompts.

Each prompt should have:

Title

Short description

Copy Prompt button

Clicking the prompt can open the corresponding resource.

--------------------------------------------------

FOOTER

--------------------------------------------------

Simple footer.

AI Academy for Realtors

Practical AI resources for real estate professionals.

Include:

Terms & Support

Privacy Policy

Do not make the footer large.

==================================================

# RESOURCE LIBRARY PAGE

==================================================

Create:

/resources

This is the primary resource browsing page.

Header:

All Resources

Description:

Explore practical AI guides, tutorials, and prompts built for real estate professionals.

Search bar.

Filters:

Category

Level

Tool

Resource Type

Sort:

Newest

A-Z

Resource types should initially include:

Guide

Tutorial

Prompt

Do not include video because this platform is intentionally focused on written resources.

Do not include "Time".

--------------------------------------------------

RESOURCE GRID

--------------------------------------------------

Use a responsive grid.

Desktop:

3 columns.

Tablet:

2 columns.

Mobile:

1 column.

Each card should contain:

Thumbnail image

Category badge

Level badge

Title

Short description

Tool(s)

CTA:

Open Resource →

Cards must be fully clickable.

Clicking anywhere on the card should open the resource.

The CTA should also work.

==================================================

# RESOURCE CARD DESIGN

==================================================

Create a polished resource card component.

Example:

[IMAGE]

Marketing

Beginner

Create Social Media Captions with AI

Turn a listing, market update, or real estate topic into ready-to-use social media content.

ChatGPT

Open Resource →

Cards should not contain huge amounts of text.

The card is the preview.

The actual detailed information lives inside the resource view.

==================================================

# RESOURCE DETAIL EXPERIENCE

==================================================

This is one of the most important parts of the application.

When a user clicks a resource, open a dedicated resource detail view.

Preferred implementation:

Use a dedicated route such as:

/resources/ai-headshots

This makes resources shareable and bookmarkable.

On desktop, the page should feel like a focused resource workspace.

On mobile, it should become a normal scrolling page.

If technically useful, support a modal-style transition from the library, but the resource should still have a real URL.

Every resource page must contain:

--------------------------------------------------

RESOURCE HEADER

--------------------------------------------------

Category

Level

Title

Short description

Recommended tool(s)

Example:

Personal Branding

Beginner

Create Studio-Quality Professional Headshots

Create professional AI headshots using simple phone photos and an AI image generator.

--------------------------------------------------

OVERVIEW

--------------------------------------------------

Heading:

What you'll learn

Explain what the agent will accomplish.

Keep this practical and concise.

--------------------------------------------------

WHAT YOU'LL NEED

--------------------------------------------------

Show required materials/tools.

Example:

- 3 clear photos

- AI image generator

- Your preferred professional style

Do NOT display estimated completion time.

--------------------------------------------------

STEP-BY-STEP GUIDE

--------------------------------------------------

Display steps as visually separated sections.

Example:

STEP 01

Take Your Photos

Instructions.

[Example image]

STEP 02

Upload Your Photos

Instructions.

STEP 03

Use the Prompt

Instructions.

Each step should be easy to scan.

--------------------------------------------------

PROMPT SECTION

--------------------------------------------------

This is critical.

Every resource that contains a prompt should have a dedicated prompt component.

Example:

Copy & Paste Prompt

[Prompt text]

[ COPY PROMPT ]

The Copy Prompt button must actually copy the prompt to the user's clipboard.

After clicking:

Copied!

Use a temporary success state.

Do not simply create a button that looks functional.

The clipboard functionality must work.

--------------------------------------------------

PROMPT FORMATTING

--------------------------------------------------

Prompts should be visually distinct from normal instructional text.

Use:

- Slightly different background

- Monospace or readable prompt typography

- Border

- Copy button

- Optional "Copy Prompt" label

If a resource has multiple prompts, each prompt gets its own copy button.

--------------------------------------------------

EXAMPLES

--------------------------------------------------

If the resource has visual examples, show them.

For example:

Before

After

Use a clean image comparison layout.

Images should be responsive.

Do not stretch images.

--------------------------------------------------

RECOMMENDED TOOLS

--------------------------------------------------

Show recommended AI tools.

Example:

Recommended Tool

ChatGPT

Description:

Use ChatGPT to generate and refine your prompt.

Button:

Open ChatGPT →

The button must open the external website in a new browser tab.

Use actual external URLs configured in the resource data.

Do not create fake links.

--------------------------------------------------

DOWNLOAD GUIDE

--------------------------------------------------

If a PDF version exists:

Download Guide

[Download PDF]

The download button must actually work.

If no PDF exists, do not show the section.

--------------------------------------------------

RELATED RESOURCES

--------------------------------------------------

At the bottom:

You may also like

Show 3 related resources based on:

- category

- tags

- tools

Each related resource must be clickable.

==================================================

# RESOURCE MODAL BEHAVIOR

==================================================

If a modal presentation is used anywhere, it must:

- Open smoothly

- Have a close button

- Close when clicking outside where appropriate

- Support ESC

- Be scrollable

- Work on mobile

- Preserve readable content

- Never trap the user

However, the resource should still have a dedicated URL.

==================================================

# PROMPT LIBRARY

==================================================

Create:

/prompts

The Prompt Library is a quick-access view of prompts contained within resources.

Important:

Do NOT duplicate prompt content manually.

Prompts should come from the same structured resource data.

This means if a prompt is updated inside a resource, the Prompt Library automatically reflects the update.

Page:

Prompt Library

Description:

Copy-ready AI prompts designed for everyday real estate tasks.

Search prompts.

Filters:

Category

Tool

Prompt cards:

Title

Description

Tool

Copy Prompt

[Copy Prompt]

Clicking the prompt title/card should open the parent resource.

The Copy Prompt button must work.

==================================================

# AI TOOLS DIRECTORY

==================================================

Create:

/tools

Heading:

AI Tools for Realtors

Description:

Explore AI tools that can help with writing, design, research, content creation, and productivity.

Create tool cards.

Each tool should contain:

Tool logo/icon

Tool name

Short description

Best for

Recommended use cases

Open Tool →

The Open Tool button must actually work and open the official tool website in a new tab.

Use real URLs.

Initial tools may include:

ChatGPT

Canva

Gemini

Claude

CapCut

Gamma

ElevenLabs

Do not invent tools.

The tool directory should be structured so additional tools can be added later.

==================================================

# WHAT'S NEW

==================================================

Create:

/whats-new

Show recently added resources.

Each item should display:

New

Title

Category

Description

Date added

Open Resource →

Use the resource data field:

createdAt

Sort newest first.

==================================================

# RESOURCE DATA / CONTENT MANAGEMENT

==================================================

Do NOT hardcode the resources into JSX components.

Create a central resource data structure.

Example:

resources.ts

Each resource should be represented as an object.

Example structure:

{

  id: "ai-headshots",

  slug: "ai-headshots",

  title: "Create Studio-Quality Professional Headshots",

  category: "Personal Branding",

  level: "Beginner",

  resourceType: "Guide",

  description: "...",

  thumbnail: "...",

  featured: false,

  isNew: true,

  tags: [

    "headshots",

    "personal branding",

    "images",

    "profile photo"

  ],

  tools: [

    "ChatGPT"

  ],

  whatYouWillLearn: "...",

  whatYouNeed: [

    "...",

    "..."

  ],

  steps: [

    {

      number: 1,

      title: "...",

      content: "...",

      images: []

    }

  ],

  prompts: [

    {

      title: "Professional Headshot Prompt",

      content: "...",

      copyEnabled: true

    }

  ],

  examples: [],

  recommendedTools: [

    "ChatGPT"

  ],

  pdfUrl: "...",

  relatedResources: []

}

Build the application around this model.

==================================================

# INITIAL RESOURCE CONTENT

==================================================

Create the initial resource library with realistic resources.

Do NOT create meaningless filler content just to make the interface look populated.

Start with approximately 15 practical resources.

Suggested initial resources:

1. AI Basics for Realtors

Category: AI Basics

Level: Beginner

2. How to Write Better AI Prompts

Category: AI Basics

Level: Beginner

3. Create Studio-Quality Professional Headshots

Category: Personal Branding

Level: Beginner

4. Create an Agent Bio with AI

Category: Personal Branding

Level: Beginner

5. Write Better Listing Descriptions with AI

Category: Listings

Level: Beginner

6. Turn Listing Details Into Social Media Content

Category: Listings

Level: Beginner

7. Create Open House Marketing Content

Category: Listings

Level: Beginner

8. Create Social Media Captions with AI

Category: Marketing

Level: Beginner

9. Create a Monthly Social Media Content Plan

Category: Marketing

Level: Beginner

10. Buyer Follow-Up Emails with AI

Category: Client Communication

Level: Beginner

11. Seller Update Emails with AI

Category: Client Communication

Level: Beginner

12. Rewrite Client Messages Professionally

Category: Client Communication

Level: Beginner

13. Summarize Meeting Notes with AI

Category: Productivity

Level: Beginner

14. Create a Weekly Business Plan with AI

Category: Productivity

Level: Beginner

15. Generate Real Estate Content Ideas

Category: Marketing

Level: Beginner

IMPORTANT:

The resources should be written as genuinely useful guides.

Do not make every resource simply:

"Ask ChatGPT to do X."

Each guide should explain:

- Why the task matters

- What information the agent should provide

- How to approach the task

- A practical prompt

- How to review the AI output

- What the agent should do next

The goal is to teach agents how to USE AI responsibly and effectively, not simply give them generic prompts.

==================================================

# HEADSHOT RESOURCE

==================================================

Include a resource based on the provided reference guide:

Create Studio-Quality Professional Headshots with AI Using Your Phone.

The source material establishes:

- Three clear photos should be taken

- Front view

- Left side view

- Right side view

- Upload the photos to an AI image generator

- Use a prompt requesting a professional headshot

- Maintain accurate facial features

- Professional photography

- Studio-quality appearance

- 4:5 aspect ratio

- High resolution

Use these concepts when structuring the resource.

Do not invent additional claims about the source material.

The resource should have:

Step 1:

Take three clear photos.

Step 2:

Upload the photos.

Step 3:

Copy and use the provided prompt.

Then provide:

Prompt

Copy Prompt

Before / After example area

Recommended AI Tool

Download Guide

==================================================

# SEARCH

==================================================

Search must work.

Search across:

- title

- description

- category

- tags

- tool names

- resource type

Search should update results immediately.

Example:

Search:

"listing"

Results:

Write Better Listing Descriptions with AI

Turn Listing Details Into Social Media Content

Create Open House Marketing Content

Search:

"email"

Results:

Buyer Follow-Up Emails with AI

Seller Update Emails with AI

Rewrite Client Messages Professionally

Search:

"headshot"

Result:

Create Studio-Quality Professional Headshots

If no results:

"No resources found"

Then:

"Try another search or browse by category."

==================================================

# FILTERING

==================================================

Filters must work together.

Example:

Category:

Marketing

Level:

Beginner

Tool:

ChatGPT

The resource list should update to show only matching resources.

Include:

Clear Filters

When no filters are active:

All Resources

==================================================

# RESPONSIVE DESIGN

==================================================

The application must be fully responsive.

Desktop:

3-column resource grid.

Tablet:

2-column grid.

Mobile:

1-column grid.

The navigation should become a mobile menu.

Resource detail pages should be comfortable to read on mobile.

Prompt boxes must not overflow horizontally.

Buttons must remain easy to tap.

Images must remain responsive.

Do not simply shrink the desktop design.

Create a genuine mobile layout.

==================================================

# UX DETAILS

==================================================

Implement polished interactions:

- Hover states

- Card hover elevation

- Button hover states

- Copy success states

- Smooth page transitions where appropriate

- Clear loading states

- Empty states

- Accessible focus states

- Keyboard navigation

- ESC to close modals

- Scrollable resource content

Do not over-animate.

Animations should feel subtle and professional.

==================================================

# ACCESSIBILITY

==================================================

Use semantic HTML.

Buttons must be actual buttons.

Links must be actual links.

Images need alt text.

Form fields need labels.

Color should not be the only way to communicate information.

Keyboard navigation should work.

Focus states should be visible.

==================================================

# IMPORTANT FUNCTIONAL REQUIREMENTS

==================================================

EVERYTHING THAT LOOKS CLICKABLE MUST ACTUALLY WORK.

Do not create decorative buttons.

Specifically:

Navigation links → WORK

Search → WORK

Filters → WORK

Category cards → WORK

Resource cards → WORK

Open Resource → WORK

Copy Prompt → WORK

Download PDF → WORK when a PDF exists

Open Tool → WORK

Related Resources → WORK

What's New items → WORK

Clear Filters → WORK

Mobile navigation → WORK

Modal close → WORK

External links → WORK

If a feature cannot be implemented properly, do not fake the interaction.

==================================================

# DO NOT BUILD

==================================================

Do NOT add:

- Login

- User accounts

- Profiles

- Gamification

- Progress tracking

- Course completion

- Certificates

- Video lessons

- Comments

- Social feeds

- Complex workflow builder

- AI chatbot

- AI assistant

- Analytics dashboard

- Subscription/payment system

- Notifications

These are outside the scope of V1.

==================================================

# FUTURE-READY ARCHITECTURE

==================================================

Although V1 is intentionally simple, structure the application so future features can be added.

Potential future features:

- Admin content management

- More resources

- More tools

- Resource favorites

- Resource analytics

- AI-powered resource search

- Agent personalization

- More advanced filtering

Do not implement these now.

Simply make the data structure and component architecture flexible enough to support them later.

==================================================

# FINAL DESIGN GOAL

==================================================

The final product should feel like:

"An internal AI command center for real estate agents."

Not:

"A website full of blog posts."

Not:

"A generic AI tools directory."

Not:

"An online course."

Not:

"A collection of PDFs."

The agent should be able to arrive and immediately understand:

1. What AI can help me with.

2. Where to find the right resource.

3. What I need to do.

4. What prompt I should use.

5. Which AI tool I should use.

6. How to copy the prompt.

7. How to continue learning.

The most important principle:

MAKE IT PRACTICAL.

Every resource should help an agent accomplish something real in their business.

==================================================

# IMPLEMENTATION ORDER

==================================================

Build the application in this order:

PHASE 1

Set up application architecture, routing, navigation, theme, and responsive layout.

PHASE 2

Build reusable ResourceCard component.

PHASE 3

Build resource data structure.

PHASE 4

Build Resource Detail page.

PHASE 5

Implement working search and filters.

PHASE 6

Implement Prompt Library.

PHASE 7

Implement Tools Directory.

PHASE 8

Implement What's New.

PHASE 9

Add initial resources.

PHASE 10

Polish responsive behavior, accessibility, hover states, copy functionality, external links, and download functionality.

Do not stop after creating the visual shell.

The application must be functional.

==================================================

# ACCEPTANCE CRITERIA

==================================================

Before considering the project complete, verify:

[ ] Navigation works

[ ] Search works

[ ] Filters work

[ ] Resource cards work

[ ] Resource pages work

[ ] Prompts can be copied

[ ] Copy feedback appears

[ ] External tool links work

[ ] PDF download works when a PDF exists

[ ] Related resources work

[ ] Category filtering works

[ ] Level filtering works

[ ] Tool filtering works

[ ] Clear Filters works

[ ] What's New works

[ ] Prompt Library works

[ ] Mobile navigation works

[ ] Mobile resource pages work

[ ] No dead buttons

[ ] No placeholder interactions

[ ] No broken links

[ ] No console errors

[ ] Layout works at desktop, tablet, and mobile widths

Build the actual working application, not a static mockup.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://listing-ai-guide.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/616d83e3-f675-4776-ba9c-0bff2c61aa76).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
