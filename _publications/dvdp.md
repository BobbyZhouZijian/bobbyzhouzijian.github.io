---
title: "Data Value Estimation on Private Gradients"
collection: publications
category: manuscripts
permalink: /publication/2015-10-01-paper-title-number-3
excerpt: # ''
date: 2024-12-22
venue: 'arXiv'
slidesurl: # 'http://academicpages.github.io/files/slides3.pdf'
paperurl: 'https://arxiv.org/pdf/2412.17008'
bibtexurl: 'https://bobbyzhouzijian.github.io/files/dvdp.bib'
citation: # 'Your Name, You. (2015). &quot;Paper Title Number 3.&quot; <i>Journal 1</i>. 1(3).'
---

For gradient-based machine learning (ML) methods commonly adopted in practice such as stochastic gradient descent, the de facto differential privacy (DP) technique is perturbing the gradients with random Gaussian noise. Data valuation attributes the ML performance to the training data and is widely used in privacy-aware applications that require enforcing DP such as data pricing, collaborative ML, and federated learning (FL). Can existing data valuation methods still be used when DP is enforced via gradient perturbations? We show that the answer is no with the default approach of injecting i.i.d. random noise to the gradients because the estimation uncertainty of the data value estimation paradoxically linearly scales with more estimation budget, producing estimates almost like random guesses. To address this issue, we propose to instead inject carefully correlated noise to provably remove the linear scaling of estimation uncertainty w.r.t. the budget. We also empirically demonstrate that our method gives better data value estimates on various ML tasks and is applicable to use cases including dataset valuation and FL.