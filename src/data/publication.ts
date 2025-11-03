export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  tweetUrl?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "NeurIPS Workshop on Foundations of Reasoning in Language Models 2025 (accepted). Under submission",
    title: "KL-Regularized Reinforcement Learning is Designed to Mode Collapse",
    authors: "Anthony GX-Chen, Jatin Prakash, Jeff Guo, Rob Fergus, Rajesh Ranganath",
    paperUrl: "https://arxiv.org/abs/2510.20817",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "We leverage equivalency between RL and distribution matching to prove KL-regularized RL naturally leads to mode-collapsed optimal policy distributions. We then introduce a simple, principled algorithm that explicitly learns multi-modal policies, by matching to a better target distribution. This improves quality and diversity across KL-regularized RL settings — from large language models to drug discovery.",
    //"We use the equivalency between RL and distribution matching to prove KL-Regularized RL have optimal policy distributions that mode collapse. We then propose a principled and simple algorithm that learns multi-modal policy distributions by construction. This improves quality and diversity in all KL-regularized RL settings, including for LLMs and in drug discovery.",
    // imageUrl: "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    //imageUrl: "/images/publication/blicket-pic-2025.png"
  },
  {
    year: "2025",
    conference: "Conference on Language Modelling (COLM)",
    title: "Language Agents Mirror Human Causal Reasoning Biases. How Can We Help Them Think Like Scientists?",
    authors: "Anthony GX-Chen, Dongyan Lin*, Mandana Samiei*, Doina Precup, Blake Richards, Rob Fergus, Kenneth Marino",
    paperUrl: "https://arxiv.org/abs/2505.09614",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Language model (LM) agents exhibit human-like biases when causally exploring. We compare this to human data. We also develop a scalable test-time sampling algorithm to fix this, by sampling hypotheses as code and acting to eliminate them.",
    // imageUrl: "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    imageUrl: "/images/publication/blicket-pic-2025.png"
  },
  {
    year: "2025",
    conference: "ICLR",
    title: "Efficient Exploration and Discriminative World Model Learning with an Object-Centric Abstraction",
    authors: "Anthony GX-Chen, Kenneth Marino, Rob Fergus",
    paperUrl: "https://arxiv.org/abs/2408.11816",
    //codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Hierarchical reinforcement learning + object centric abstraction + discriminative world model learning. It explore efficiently, plans over long horizons, rapidly solves single tasks, and transfers to different item types and environments.",
    // imageUrl: "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    imageUrl: "/images/publication/mead-2025-abstract-transition.png"
  },
  {
    year: "2024",
    conference: "NeurIPS Workshop on Intrinsically Motivated Open-ended Learning",
    title: "Testing Causal Hypotheses through Hierarchical Reinforcement Learning",
    authors: "Anthony GX-Chen*, Dongyan Lin*, Mandana Samiei*",
    paperUrl: "https://openreview.net/forum?id=ZqNcJ8uuHT",
    tldr: "A framework to think about structural causal models (SCMs) and Markov Decision Processes (MDPs) together, for agentic systems that can test their own causal hypotheses.",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
    imageUrl: "/images/publication/markov-scm-2024.png"
  },
  {
    year: "2024",
    conference: "Reinforcement Learning Conference (RLC)",
    title: "Light-weight probing of unsupervised representations for reinforcement learning",
    authors: "Wancong Zhang, Anthony GX-Chen, Vlad Sobal, Yann LeCun, Nicolas Carion",
    paperUrl: "https://arxiv.org/abs/2208.12345",
    tldr: "We investigate different design choices that makes unsupervised representation learning  work for reinforcement learning, and design a computationally efficient linear probe that correlate strongly with eventual downstream RL performance.",
    // codeUrl: "https://github.com/jsmith/robust-causal-discovery",
    imageUrl: "/images/publication/light-weight-rlc-2024-ci.png"
  },
  {
    year: "2022",
    conference: "AAAI",
    title: "A Generalized Bootstrap Target for Value-Learning, Efficiently Combining Value and Feature Predictions",
    authors: "Anthony GX-Chen, Veronica Chelu, Blake Richards, Joelle Pineau",
    paperUrl: "https://arxiv.org/abs/2201.01836",
    tldr: "A new way of constructing more efficient one-step bootstrapped learning targets, by combining value estimates (reward prediction) and successor features (feature prediction) in a complementary way. This is a generalization of TD(0), and leads to a spectrum of one-step learning targets trading off value vs. feature predictions.",
    tweetUrl: "https://x.com/AntChen_/status/1496653952531804161",
    imageUrl: "/images/publication/lambda-bootstrap-2021.png",
  },
  {
    year: "2020",
    conference: "NeurIPS Workshop in Biological and Artificial Reinforcement Learning",
    title: "Lambda Successor Return Error",
    authors: "Anthony GX-Chen, Veronica Chelu, Blake Richards, Joelle Pineau",
    paperUrl: "publications/gxchen2020_neurips-barl_preprint.pdf",
    tldr: "We show the value prediction error from lambda-return can be factorized into one-step temporal difference (TD) errors and a successor-like representation (SR). This leads to a new algorithm using SR for error assignment. We show in a tabular setting this results in faster value function learning as compared to both the lambda-return, as well as the (original) SR. We further discuss this perspective in light of the recent neuroscience hypothesis of the brain using successor-like representations.",
  },
  {
    year: "2020",
    conference: "Frontiers in Artificial Intelligence",
    title: "A Bayesian Account of Generalist and Specialist Formation Under the Active Inference Framework",
    authors: "Anthony GX-Chen, David Benrimoh, Thomas Parr, Karl J. Friston",
    paperUrl: "https://www.frontiersin.org/articles/10.3389/frai.2020.00069/full",
    tldr: "We model animal / human behaviour using a variational Bayesian (Active Inference) framework. Specifically, we propose how the priors over an agent's policy space can be learned as a result of experience, and how this leads to the phenomenon of specialist and generalist formation. Finally we discuss this in the context of computational psychiatry where symptoms can be explained through faulty inference.",
  },
  {
    year: "2020",
    conference: "Neuroimage",
    title: "Investigating microstructural variation in the human hippocampus using non-negative matrix factorization",
    authors: "Raihaan Patel, Christopher J Steele, Anthony GX-Chen, Sejal Patel, Gabriel A Devenyi, Jürgen Germann, Christine L Tardif, M Mallar Chakravarty",
    paperUrl: "https://www.sciencedirect.com/science/article/pii/S1053811919309395",
    tldr: "Using non-negative matrix factorization to discover interpretable components of the human hippocampus from neuroimaging data.",
    // We investigate the use of an unsupervised statistical method (non-negative matrix factorization) in the analysis of multi-modal neuroimaging dataset. Specifically, we were able to discover from neuroanatomy - in a purely data-driven way - interpretable components of the human hippocampus. We further show interpretable relationships between the components and individual demography and behavioural measures. 
  },
  {
    year: "2019",
    conference: "American Journal of Medical Genetics Part B: Neuropsychiatric Genetics",
    title: "Machine learning in schizophrenia genomics, a case‐control study using 5,090 exomes",
    authors: "Yannis J Trakadis, Sameer Sardaar, Anthony GX-Chen, Vanessa Fulginiti, Ankur Krishnan",
    paperUrl: "https://onlinelibrary.wiley.com/doi/full/10.1002/ajmg.b.32638",
    tldr: "Applying machine learning to genetic data for high-accuracy schizophrenia risk prediction and gene feature analysis.",
    // We apply machine learning to genetic (whole exome sequencing) data, demonstrating our feature extraction and supervised classification pipeline allows for high-accuracy prediction of individuals at high risk for schizophrenia. In addition to providing a clinical tool, we subsequently analyze the top genes (features) utilized by the algorithm in light of existing genetic research, providing new insight into the pathophysiology of schizophrenia.
  },
];
