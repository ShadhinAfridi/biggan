// html-runner/data/hsc-glossary.js
// Comprehensive Definitions, Terminology, and Theory for HSC ICT Chapter 4
// "Introduction to Web Design and HTML" (ওয়েব ডিজাইন পরিচিতি এবং HTML)
// NCTB Bangladesh National Curriculum & Textbook Board Standard

export const HSC_CHAPTER_INFO = {
  chapterNumber: 4,
  titleEn: "Introduction to Web Design and HTML",
  titleBn: "ওয়েব ডিজাইন পরিচিতি এবং HTML",
  curriculum: "NCTB HSC ICT Curriculum (Classes XI-XII)",
  historicalContext: {
    inventor: "Sir Tim Berners-Lee",
    year: 1989,
    organization: "CERN (European Organization for Nuclear Research), Geneva, Switzerland",
    significance: "Proposed the World Wide Web (WWW) and created the first web browser and editor, WorldWideWeb, in 1990."
  },
  publishingSteps: [
    {
      step: 1,
      titleEn: "Domain Name Registration",
      titleBn: "ডোমেইন নেম রেজিস্ট্রেশন",
      descEn: "Securing a unique, memorable alphanumeric web address (e.g., bangladesh.gov.bd, biggan.me) mapped to a numeric IP address through the Domain Name System (DNS).",
      descBn: "ইন্টারনেটে কোনো ওয়েবসাইটের জন্য একটি একক ও অনন্য নাম বা ঠিকানা (যেমন bangladesh.gov.bd) নির্দিষ্ট ফি দিয়ে নিবন্ধন করা।"
    },
    {
      step: 2,
      titleEn: "Web Hosting",
      titleBn: "ওয়েব হোস্টিং",
      descEn: "Storing HTML documents, stylesheets, scripts, and multimedia files on a dedicated server connected 24/7 to the internet with a public IP address so it remains accessible worldwide.",
      descBn: "তৈরিকৃত ওয়েবসাইটের ফাইলসমূহ (HTML, CSS, ছবি ইত্যাদি) সার্বক্ষণিকভাবে ইন্টারনেটে সংযুক্ত একটি পাবলিক সার্ভারে সংরক্ষণ করা।"
    },
    {
      step: 3,
      titleEn: "Search Engine Optimization (SEO) & Submission",
      titleBn: "সার্চ ইঞ্জিন অপটিমাইজেশন ও সাবমিশন",
      descEn: "Submitting website sitemaps and URLs to major search engines (Google, Yahoo, Bing, Pipilika) and optimizing page titles, meta descriptions, and keywords for organic discoverability.",
      descBn: "ওয়েবসাইটটি সহজে খুঁজে পাওয়ার জন্য গুগল, বিং বা পিপীলিকার মতো সার্চ ইঞ্জিনে যুক্ত করা এবং কিওয়ার্ড অপটিমাইজ করা।"
    }
  ]
};

export const HSC_GLOSSARY = [
  // 1. Core Web Concepts
  {
    id: "web-page",
    termEn: "Web Page",
    termBn: "ওয়েব পেজ",
    category: "web-basics",
    defEn: "A digital document stored on an internet-connected web server that can be retrieved and viewed using a web browser, typically written in HTML.",
    defBn: "ইন্টারনেটের সাথে যুক্ত কোনো ওয়েব সার্ভারে সংরক্ষিত বিশেষ ইলেকট্রনিক বা ডিজিটাল ডকুমেন্ট যা ওয়েব ব্রাউজার দিয়ে দেখা যায়।"
  },
  {
    id: "website",
    termEn: "Website",
    termBn: "ওয়েবসাইট",
    category: "web-basics",
    defEn: "A collection of related, interlinked web pages hosted under a common domain name on a web server.",
    defBn: "একই ডোমেইন নামের অধীনে কোনো ওয়েব সার্ভারে সংরক্ষিত পরস্পরের সাথে সম্পর্কযুক্ত একাধিক ওয়েব পেজের সমষ্টি।"
  },
  {
    id: "web-server",
    termEn: "Web Server",
    termBn: "ওয়েব সার্ভার",
    category: "web-basics",
    defEn: "A specialized computer continuously connected to the internet that stores website files and serves them to client devices upon receiving HTTP/HTTPS requests.",
    defBn: "ইন্টারনেটে সার্বক্ষণিকভাবে যুক্ত একটি শক্তিশালী কম্পিউটার যেখানে ওয়েবসাইটের ফাইলসমূহ সংরক্ষিত থাকে এবং ক্লায়েন্টের অনুরোধে তা সরবরাহ করে।"
  },
  {
    id: "web-browser",
    termEn: "Web Browser",
    termBn: "ওয়েব ব্রাউজার",
    category: "web-basics",
    defEn: "Application software installed on client devices (e.g., Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge) used to retrieve, parse, and render web pages from web servers.",
    defBn: "যে সফটওয়্যারের সাহায্যে ব্যবহারকারী ওয়েব সার্ভার থেকে তথ্য বা ওয়েব পেজ ব্রাউজ ও প্রদর্শন করতে পারেন (যেমন: গুগল ক্রোম, ফায়ারফক্স)।"
  },
  {
    id: "home-page",
    termEn: "Home Page (Index)",
    termBn: "হোম পেজ (ইনডেক্স পেজ)",
    category: "web-structure",
    defEn: "The primary landing page of a website (conventionally named index.html) that introduces the site purpose and provides master navigation links to other sections.",
    defBn: "যেকোনো ওয়েবসাইটে প্রবেশ করলে প্রথমে যে পেজটি প্রদর্শিত হয় তাকে হোম পেজ বলে (সাধারণত index.html নামে সংরক্ষিত থাকে)।"
  },
  {
    id: "static-website",
    termEn: "Static Website",
    termBn: "স্ট্যাটিক ওয়েবসাইট",
    category: "web-architecture",
    defEn: "A website whose content remains fixed after loading and only changes when the developer manually edits the HTML/CSS source code. Does not connect to dynamic server databases.",
    defBn: "যে ওয়েবসাইটের ডেটা বা কন্টেন্ট ব্রাউজারে লোড হওয়ার পর স্বয়ংক্রিয়ভাবে পরিবর্তিত হয় না এবং সরাসরি ডাটাবেজের সাথে যুক্ত থাকে না।"
  },
  {
    id: "dynamic-website",
    termEn: "Dynamic Website",
    termBn: "ডায়নামিক ওয়েবসাইট",
    category: "web-architecture",
    defEn: "A website whose content updates dynamically in real-time based on user interaction, database queries, and server-side scripts (using technologies like PHP, Python, ASP.NET, Node.js).",
    defBn: "যে ওয়েবসাইটের কন্টেন্ট ব্যবহারকারীর ইনপুট বা ডাটাবেজের তথ্যের ওপর ভিত্তি করে নিয়মিত ও স্বয়ংক্রিয়ভাবে পরিবর্তিত হয়।"
  },
  {
    id: "wireframe",
    termEn: "Wireframe",
    termBn: "ওয়্যারফ্রেম",
    category: "design",
    defEn: "A basic visual blueprint or skeletal layout sketch indicating the arrangement of headers, menus, image banners, content columns, and footers before coding begins.",
    defBn: "ওয়েব পেজের চূড়ান্ত কোডিং করার পূর্বে এর বিভিন্ন উপাদান (হেডার, মেন্যু, ছবি, কন্টেন্ট ইত্যাদি) কোথায় কীভাবে বসবে তার খসড়া নকশা বা স্কেচ।"
  },
  {
    id: "client-server",
    termEn: "Client & Server Architecture",
    termBn: "ক্লায়েন্ট-সার্ভার আর্কিটেকচার",
    category: "network",
    defEn: "A distributed computing architecture where client software (e.g. browser) sends requests for services or pages, and the central server receives, processes, and fulfills the request.",
    defBn: "একটি নেটওয়ার্ক ব্যবস্থা যেখানে ব্যবহারকারীর কম্পিউটার (ক্লায়েন্ট) তথ্যের অনুরোধ পাঠায় এবং কেন্দ্রীয় কম্পিউটার (সার্ভার) সেই অনুরোধ অনুযায়ী তথ্য সরবরাহ করে।"
  },
  {
    id: "request-response",
    termEn: "Request & Response",
    termBn: "রিকোয়েস্ট ও রেসপন্স",
    category: "network",
    defEn: "The two-step communication cycle where a client sends a request for data to a server over HTTP/HTTPS, and the server returns a response containing the requested document or status code.",
    defBn: "ক্লায়েন্ট কর্তৃক সার্ভারে তথ্য চাওয়ার প্রক্রিয়া হলো রিকোয়েস্ট (Request) এবং সার্ভার কর্তৃক ক্লায়েন্টকে তথ্য পাঠানোকে রেসপন্স (Response) বলে।"
  },
  {
    id: "hypertext",
    termEn: "Hypertext",
    termBn: "হাইপারটেক্সট",
    category: "html-basics",
    defEn: "Text containing electronic links (hyperlinks) that readers can click to immediately jump to another document or section within the web.",
    defBn: "যে টেক্সটের সাথে অন্য কোনো টেক্সট, পেজ বা নথির সরাসরি সংযোগ (Hyperlink) থাকে, যার ওপর ক্লিক করলে কাঙ্ক্ষিত পেজটি চালু হয়।"
  },
  {
    id: "hypermedia",
    termEn: "Hypermedia",
    termBn: "হাইপারমিডিয়া",
    category: "html-basics",
    defEn: "An extension of hypertext that incorporates clickable multimedia elements such as images, audio clips, video clips, and animations linking to other web resources.",
    defBn: "হাইপারটেক্সটের উন্নত সংস্করণ যেখানে শুধু লেখার পরিবর্তে ছবি, অডিও, ভিডিও বা অ্যানিমেশনের সাথে লিংক স্থাপন করা হয়।"
  },
  {
    id: "html-definition",
    termEn: "HTML (HyperText Markup Language)",
    termBn: "HTML (হাইপারটেক্সট মার্কআপ ল্যাঙ্গুয়েজ)",
    category: "html-basics",
    defEn: "A standardized markup language composed of tags and attributes used to define the structural layout, typography, and content hierarchy of documents on the World Wide Web.",
    defBn: "ইন্টারনেটে ওয়েব পেজ তৈরির জন্য ব্যবহৃত একটি আন্তর্জাতিক মার্কআপ ভাষা (এটি কোনো প্রোগ্রামিং ভাষা নয়)।"
  },
  {
    id: "html-tag",
    termEn: "HTML Tag",
    termBn: "HTML ট্যাগ",
    category: "html-basics",
    defEn: "A command keyword enclosed within angle brackets (< and >) that instructs web browsers on how to format, structure, or display content. Usually comes in pairs: opening (<tag>) and closing (</tag>).",
    defBn: "অ্যাঙ্গেল ব্র্যাকেট (< >) এর মধ্যে লিখিত কিছু সংরক্ষিত কী-ওয়ার্ড যা ব্রাউজারকে নির্দেশ দেয় কন্টেন্ট কীভাবে প্রদর্শিত হবে।"
  },
  {
    id: "html-element",
    termEn: "HTML Element",
    termBn: "HTML এলিমেন্ট",
    category: "html-basics",
    defEn: "The complete construction beginning with an opening tag, including any enclosed content, and terminating at the corresponding closing tag (e.g. <p>Bangladesh</p>).",
    defBn: "একটি ওপেনিং ট্যাগ থেকে শুরু করে এর মধ্যবর্তী কন্টেন্ট এবং ক্লোজিং ট্যাগ পর্যন্ত সম্পূর্ণ অংশকে একত্রে HTML এলিমেন্ট বলে।"
  },
  {
    id: "container-tag",
    termEn: "Container Tag",
    termBn: "কন্টেইনার ট্যাগ (ধারক ট্যাগ)",
    category: "html-basics",
    defEn: "An HTML tag that possesses both an opening tag and a closing tag with content placed between them (e.g. <h1>Title</h1>, <p>Text</p>, <b>Bold</b>).",
    defBn: "যেসব ট্যাগের ওপেনিং ট্যাগ, ভেতরে নির্দিষ্ট বিষয়বস্তু এবং ক্লোজিং ট্যাগ থাকে তাদের কন্টেইনার ট্যাগ বলে (যেমন: <html>, <body>, <p>, <table>)।"
  },
  {
    id: "empty-tag",
    termEn: "Empty Tag (Void Element)",
    termBn: "এম্পটি ট্যাগ (ফাঁকা ট্যাগ)",
    category: "html-basics",
    defEn: "An HTML tag that encloses no text content and does not require a closing tag (e.g. <br>, <hr>, <img>, <input>, <meta>).",
    defBn: "যেসব ট্যাগের কোনো ক্লোজিং ট্যাগ বা ভেতরে কোনো টেক্সট কন্টেন্ট থাকে না তাদের এম্পটি ট্যাগ বলে (যেমন: <br>, <hr>, <img>)।"
  },
  {
    id: "html-attribute",
    termEn: "HTML Attribute",
    termBn: "HTML অ্যাট্রিবিউট",
    category: "html-basics",
    defEn: "Additional modifier keywords inserted inside the opening tag (in name=\"value\" format) that provide supplementary characteristics, behaviors, or styling directives to the element.",
    defBn: "ট্যাগের কার্যক্ষমতাকে সুনির্দিষ্ট বা পরিবর্তন করার জন্য ওপেনিং ট্যাগের মধ্যে যেসব অতিরিক্ত বৈশিষ্ট্য বা নির্দেশ যুক্ত করা হয় (যেমন: href, src, width)।"
  },
  {
    id: "ip-address",
    termEn: "IP Address (Internet Protocol Address)",
    termBn: "আইপি অ্যাড্রেস (IP Address)",
    category: "publishing",
    defEn: "A unique numerical identifier (such as IPv4: 192.168.1.1 or IPv6) assigned to every device connected to a computer network communicating via the Internet Protocol.",
    defBn: "ইন্টারনেটের সাথে যুক্ত প্রতিটি কম্পিউটার বা ডিভাইসের একটি নির্দিষ্ট ও অনন্য গাণিতিক পরিচিতি বা ঠিকানা।"
  },
  {
    id: "domain-name",
    termEn: "Domain Name",
    termBn: "ডোমেইন নেম",
    category: "publishing",
    defEn: "A human-friendly alphanumeric text address (e.g., biggan.me, educationboard.gov.bd) that is mapped to a server's numeric IP address through the Domain Name System (DNS).",
    defBn: "আইপি ঠিকানার কঠিন সংখ্যা মনে রাখা কষ্টকর হওয়ায় অক্ষরের সাহায্যে গঠিত যে সহজ নাম ব্যবহার করা হয় তাকে ডোমেইন নেম বলে।"
  },
  {
    id: "two-click-rule",
    termEn: "Two-Click Rule",
    termBn: "টু-ক্লিক রুল (Two-Click Rule)",
    category: "web-structure",
    defEn: "A web usability guideline suggesting that a user should be able to navigate from the home page to any crucial piece of information or sub-section within no more than two mouse clicks.",
    defBn: "ওয়েবসাইট নেভিগেশনের একটি সাধারণ নীতি যাতে ব্যবহারকারী হোম পেজ থেকে সর্বোচ্চ দুটি ক্লিকের মধ্যেই যেকোনো কাঙ্ক্ষিত পেজে পৌঁছাতে পারেন।"
  },
  {
    id: "utf-8-encoding",
    termEn: "UTF-8 Unicode Encoding",
    termBn: "UTF-8 ক্যারেক্টার এনকোডিং",
    category: "html-basics",
    defEn: "A variable-width character encoding standard declared via <meta charset=\"utf-8\"> inside <head> that allows web browsers to correctly render multilingual text, including Bangla characters, without garbled text.",
    defBn: "একটি আন্তর্জাতিক ইউনিকোড স্ট্যান্ডার্ড যার মাধ্যমে ওয়েব পেজে বাংলাসহ যেকোনো ভাষার বর্ণমালা কোনো ধরনের বিকৃতি ছাড়া সঠিকভাবে প্রদর্শিত হয়।"
  },
  {
    id: "front-end-back-end",
    termEn: "Front-End vs Back-End Development",
    termBn: "ফ্রন্ট-এন্ড বনাম ব্যাক-এন্ড ডেভেলপমেন্ট",
    category: "web-architecture",
    defEn: "Front-end focuses on client-side user interface design and visual presentation (HTML, CSS, JavaScript). Back-end focuses on server-side logic, database interactions, and server API management.",
    defBn: "ফ্রন্ট-এন্ড হলো ওয়েবসাইটের দৃশ্যমান ইন্টারফেস যা ব্যবহারকারী সরাসরি দেখেন ও ব্যবহার করেন; ব্যাক-এন্ড হলো সার্ভার ও ডাটাবেজের ভেতরের ব্যাকগ্রাউন্ড প্রোগ্রামিং।"
  },
  {
    id: "full-stack-developer",
    termEn: "Full-Stack Developer",
    termBn: "ফুল-স্ট্যাক ডেভেলপার",
    category: "web-architecture",
    defEn: "A software engineer proficient in handling both front-end client interface development and back-end server/database infrastructure.",
    defBn: "যে প্রোগ্রামার বা ডেভেলপার ফ্রন্ট-এন্ড (ডিজাইন) এবং ব্যাক-এন্ড (সার্ভার ও ডাটাবেজ) উভয় ক্ষেত্রেই দক্ষ।"
  }
];
