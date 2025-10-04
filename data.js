// data.js
const projects = [
  {
    id: 1,
    title: "Fake News Detection in Bengali",
    description:
      "Developed a multilingual transformer-based model (e.g., mBERT, XLM-RoBERTa) to classify fake news in Bengali, with an accuracy of 87% on a custom dataset of over 1,000 annotated articles.",
    tags: ["Python", "NLP", "Transformers", "PyTorch"],
    imageUrl:
      "https://ars.els-cdn.com/content/image/1-s2.0-S2949719125000317-gr1.jpg",
    detailUrl: "/blog/fake-news-detection", // Update to actual blog post link when added
  },
  {
    id: 2,
    title: "Railroad Management Mobile App",
    description:
      "Developed a scalable mobile app using Angular/Ionic for real-time GPS tracking and video reporting of incidents, adopted by more than 5,000 users.",
    tags: ["Angular", "Ionic", "GPS", "Mobile Development"],
    imageUrl:
      "https://cdn.dribbble.com/userupload/44720471/file/4d6533855b8e0b011f0edb6e08e714be.jpg?format=webp&resize=400x300&vertical=center",
    detailUrl: "#",
  },
  {
    id: 3,
    title: "SharePoint Inventory Management",
    description:
      "Developed custom SharePoint solutions to automate inventory management and CRM workflows, reducing manual reporting time by 25 hours/month.",
    tags: ["SharePoint", "AngularJS", "Automation", "APIs"],
    imageUrl:
      "https://i.ytimg.com/vi/wyzV0Fr7aLA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCO1ngDfwAHX-B7gzzbLt-5UwuVbg",
    detailUrl: "#",
  },
  {
    id: 4,
    title: "Digital Twins for Logistics",
    description:
      "Engineered simulation environments to create digital twins of real-world logistics and engineering systems, supporting Reinforcement Learning algorithm testing.",
    tags: ["Simulation", "Reinforcement Learning", "Python", "AI"],
    imageUrl:
      "https://research.aimultiple.com/wp-content/uploads/2020/08/digital-twin-applications.png",
    detailUrl: "#",
  },
];

const blogs = [
  {
    id: 1,
    title: 'Graphical Causal Models: The Ultimate "What If" Machine',
    excerpt:
      "Graphical Causal Models aren't just for academic papers. They are a fundamental thinking tool. Before you run a complex machine learning model or spend millions on a business decision based on a correlation, draw a picture.",
    readTime: "8 min",
    date: "October 1, 2025",
    fullContent:
      `Remember being a kid with a set of dominos? The pure, simple joy of lining them up, standing that first one on its end, and giving it a gentle nudge. Click, click, click, click. You knew with absolute certainty that tipping the first one would make the last one fall. It was a perfect, self-contained universe of cause and effect.
                    \nBut then, your mind would wander. What if you painted the dominos? Would the paint make them heavier, causing the whole chain to fall slower? What if you replaced a wooden domino with a heavier ceramic one? Would the chain break at that point?
                    \nSuddenly, your simple game wasn't so simple. You were no longer just observing a chain reaction; you were asking causal questions. You were running a tiny, physical simulation of a "what if" scenario. In the world of data science, Graphical Causal Models (GCMs) are the blueprints for these simulations. They are the ultimate "what if" machines for our complex, data-driven world.
                    \n<b>The Problem: When Our Gut Isn't Enough</b>
                    \nLet's leave the domino chain and step into a more grown-up, and slightly sillier, problem. Imagine you're analyzing beach data and you discover a striking correlation: as ice cream sales go up, so do shark attacks.
                    \nYour inner data detective might raise an eyebrow. Does eating a Chunky Monkey cone somehow attract Jaws? Does the scent of waffle cones act as a shark aphrodisiac? Of course not. Our common sense tells us this is ridiculous. But in the boardroom, with a slick PowerPoint slide showing that correlation, someone might just suggest a "Public Safety Ice Cream Ban."
                    \nThe problem is, our gut feeling isn't a valid statistical argument. We know the conclusion is wrong, but how do we prove it? How do we move from spotting a spurious correlation to understanding the true, underlying cause?
                    \n<b>The Solution: Drawing a Picture of Causality</b>
                    \nThis is where Graphical Causal Models come to the rescue. Instead of diving headfirst into complex equations, we start by drawing a simple picture. We use two basic building blocks:
                    \n
                    <ul>
                        <li><b>Nodes:</b> These are the things in our system. Let's draw three: Ice Cream Sales, Shark Attacks, and Temperature.</li>
                        <li><b>Arrows (Edges):</b> These represent our assumptions about direct causal relationships.</li>
                    </ul>
                    \n\nNow, let's connect them based on what we know about the world:\n
                    <ul>
                        <li>Does the temperature outside cause people to buy more ice cream? Yes. So we draw an arrow: Temperature → Ice Cream Sales.</li>
                        <li>Does the temperature outside cause more people to go swimming in the ocean, thereby increasing the chance of shark encounters? Yes. So we draw an arrow: Temperature → Shark Attacks.</li>
                        <li>Does buying an ice cream directly cause a shark to attack? No. So we draw NO ARROW from Ice Cream Sales to Shark Attacks.</li>
                    </ul>
                    \n\nAnd just like that, we have our first causal graph:
                    \n\n![Causal graph](./images/blog01-causal-graph.png|Causal discovery of Sharks dont have any sweet tooth)` +
                    `\n<b>The "Aha!" Moment: What the Graph Teaches Us</b>
                    \n\nThis simple, powerful picture does two incredible things:
                    \n\n<ol>
                        <li>The graph clearly shows that Ice Cream Sales and Shark Attacks are not directly connected. Any correlation between them is a mirage, created by their shared common cause: the Temperature. In causal inference terms, we've identified a confounder.</li>
                        <li>The graph tells us exactly what to do. If we want to know the true effect of ice cream on sharks (which is zero), we must adjust for or control for temperature. We have to compare days with the same temperature and see if, on those days, ice cream sales still predict attacks. (Spoiler alert: they won't).</li>
                    </ol>
                    \n\nThe graph forces us to make our assumptions explicit. If someone argues, "But what if sharks really do like the smell of ice cream?", the graph can be updated to include that arrow. But now the burden of proof is on them to provide data that supports that wild claim.
                    \n<b>Your New Superpower</b>
                    \n
                    <ul>
                        <li>Are you seeing that social media usage correlates with anxiety? Draw a graph. What else could be causing both? (Maybe loneliness?).</li>
                        <li>Does having more books at home correlate with a child's academic success? Draw a graph. What's the role of parental education?</li>
                    </ul>
                    \n\nBy sketching out these causal assumptions, you move from being a passive observer of patterns to an active architect of understanding. You stop the "shark attack ice cream ban" proposals before they ever leave the meeting room.
                    \n\nSo, the next time you're faced with a puzzling relationship in your data, don't just reach for your keyboard. Grab a pen. Draw your dominos. Ask your "what ifs." You might be surprised at how much clarity a simple picture can bring.`,
  },

];

// Instructions to add new projects or blogs:
// To add a new project, append an object to the 'projects' array with the required fields.
// To add a new blog post, append an object to the 'blogs' array with id (unique number), title, excerpt (short summary), readTime (e.g., "5 min"), date (e.g., "October 3, 2025"), and fullContent (the full blog text as a string).
// In fullContent, use \n\n for new paragraphs, \n for line breaks, and ![alt text](image-url) for inline images (e.g., ![Chart](./images/chart.png|Optional caption)).
// For images: Use online URLs (e.g., "https://example.com/img.jpg") or local paths (upload to /images folder in repo, e.g., "./images/my-img.png").
// Save the file and refresh the page to see changes. No need to modify HTML or JS.
