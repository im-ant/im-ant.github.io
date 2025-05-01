export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Anthony GX-Chen",
  title: "Ph.D. Student",
  institution: "New York University",
  // Note that links work in the description
  description: "I am a 4th year PhD student at NYU's <a href='https://wp.nyu.edu/cilvr/'>CILVR Lab</a> and <a href='https://cds.nyu.edu/'>Center for Data Science</a>. My research focuses on better understanding the reinforcement learning (RL) framework, and developing better RL algorithms.<br><br> A few questions I've been thinking about:<br><ul style='list-style-type:disc; margin-left:20px;'><li>How to build agents that efficiently explores and autonomously learns a useful model of the world?</li><li>How to construct abstractions and hierarchies to enable both high-level reasoning and low-level control that is grounded?</li><li>How to design efficient and scalable RL algorithms with a minimal bag of tricks?</li></ul><br> I completed my Master's at Mila / McGill University, co-advised by <a href='https://www.cs.mcgill.ca/~jpineau/'>Prof. Joelle Pineau </a> and <a href='https://sites.google.com/mila.quebec/linc-lab/home'>Prof. Blake Richards</a>. My <a href='https://escholarship.mcgill.ca/concern/theses/2v23vz71g'>master's thesis</a> introduces new ways of decomposing the value function in RL for more efficient learning. This also relates to neuroscientific theories of how the <a href='https://en.wikipedia.org/wiki/Hippocampus'>hippocampus</a> works. <br><br> I was fortunate to work with a number researchers in neuroscience and psychiatry throughout my undergraduate studies: <a href='https://rimuhc.ca/-/yannis-trakadis'>Dr. Yannis Trakadis</a> in psychiatric genomics, <a href='https://www.cobralab.ca/'>Prof. Mallar Chakravarty</a> in computational neuroscience and neuroimaging, and <a href='https://www.fil.ion.ucl.ac.uk/~karl/'>Prof. Karl Friston</a> in theoretical neuroscience. These experiences gave me an appreciation for the tools, knowledge, and perspectives in the neural-sciences.",
  email: "anthony [DOT] gx [DOT] chen [AT] nyu.edu",
  imageUrl: "/images/self-IMG-4583_crop.jpg", 
  googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=7jAlFsIAAAAJ",
  githubUsername: "im-ant",
  linkedinUsername: "anthonygxchen",
  twitterUsername: "AntChen_",
  // blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/1jbki6O-mD28uvmUfo0TF9-aHmj5ml45A/view?usp=sharing",
  institutionUrl: "https://wp.nyu.edu/cilvr/",
  // altName: "",
  //secretDescription: "I like dogs.",
};
