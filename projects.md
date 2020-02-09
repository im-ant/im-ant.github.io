---
title: Projects
layout: page
---

(Please note that this page is very out of date. Last updated in 2017)

---
### [Stability_Utils.py](https://github.com/im-ant/Analysis_CoBrA/blob/master/Stability_Utils.py)
Some python functions for stability analysis that I am writing as I do my own cluster stability analysis for neuroimaging dataset. In the function *countCommonEdge*, I seem to have found a nice balance between runtime (via vectorization) and memory usage for counting the number of common edges between two graphs with identical vertices - a memory intensive step in [Ben-Hur's 2002 method](https://psb.stanford.edu/psb-online/proceedings/psb02/benhur.pdf) for analyzing cluster similarity (see Equation 2 in his paper). The space complexity is reduced from O(n^2) to O(n).

---
### [ClinVar_PathoID](https://github.com/im-ant/ClinVar_PathoID)
With rapid advances in genomics, techniques such as next-generation sequencing allows for the rapid and accurate sequencing of entire genomes. Mutations can be identified from these genome-wide sequencing for disease identification and treatment.

ClinVar is an openly available online database at the National Center for Biotechnology Information that allows physicians and researchers to look up genetic mutations and their effect on health. However, genome-wide data contains 10,000+ genes. Manual search of mutations is tedious, error-prone, and simply unfeasible at a larger scale.

The ClinVar Pathogenicity Finder (*ClinVar_PathoID*) is a tool for large-scale analysis of mutation statuses and identification of pre-existing disease conditions. It accesses the ClinVar database and retrieves information in an automated fashion, resulting in huge improvements in efficiency and enhancements to clinical and research capabilities.

Please refer to the github page for specifics regarding the Pathogenicity Finder.
