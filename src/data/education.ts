export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021—Present",
    institution: "New York University",
    degree: "Ph.D. in Data Science",
    advisor: "Rob Fergus, Rajesh Ranganath",
  },
  {
    year: "2019-2021",
    institution: "Mila / McGill University",
    degree: "M.Sc. in Computer Science",
    advisor: "Joelle Pineau, Blake Richards",
    thesis: "On Successor Representations for value learning: efficient credit assignment through implicit models",
    thesisUrl: "https://escholarship.mcgill.ca/concern/theses/2v23vz71g"  // Optional links to thesis
  },
  {
    year: "2015-2019",
    institution: "McGill University",
    degree: "B.Sc. in Neuroscience",
    // thesis: "??",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
