---
title: "Probably Approximate Shapley Fairness with Applications in Machine Learning"
collection: publications
category: conferences
permalink: /publication/pasf
excerpt: '<img src="/images/pasf_gif.gif" alt="DETAIL Algorithm Demo" style="width: 100%; height: auto; margin: 1px auto; display: block; border-radius: 8px;">'
date: 2022-12-01
venue: 'AAAI 2023 (Oral)'
paperurl: 'https://arxiv.org/pdf/2212.00630'
bibtexurl: 'https://bobbyzhouzijian.github.io/files/pasf.bib'
citation: # 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---

The Shapley value (SV) is adopted in various scenarios in machine learning (ML), including data valuation, agent valuation, and feature attribution, as it satisfies their fairness requirements. However, as exact SVs are infeasible to compute in practice, SV estimates are approximated instead. This approximation step raises an important question: do the SV estimates preserve the fairness guarantees of exact SVs? We observe that the fairness guarantees of exact SVs are too restrictive for SV estimates. Thus, we generalise Shapley fairness to probably approximate Shapley fairness and propose fidelity score, a metric to measure the variation of SV estimates, that determines how probable the fairness guarantees hold. Our last theoretical contribution is a novel greedy active estimation (GAE) algorithm that will maximise the lowest fidelity score and achieve a better fairness guarantee than the de facto Monte-Carlo estimation. We empirically verify GAE outperforms several existing methods in guaranteeing fairness while remaining competitive in estimation accuracy in various ML scenarios using real-world datasets.