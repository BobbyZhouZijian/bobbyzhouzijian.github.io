---
title: "TETRIS: Optimal Draft Token Selection for Batch Speculative Decoding"
collection: publications
category: conferences
permalink: /publication/tetris
excerpt: '<img src="/images/tetris.png" alt="TETRIS Algorithm Demo" style="width: 100%; height: auto; margin: 1px auto; display: block; border-radius: 8px;">'
date: 2025-02-21
venue: 'ACL 2025 Main'
slidesurl: # 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://arxiv.org/pdf/2502.15197'
bibtexurl: 'https://bobbyzhouzijian.github.io/files/tetris.bib'
citation: # 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
We propose TETRIS, a novel method that optimizes the total throughput of batch speculative decoding in multi-request settings. Unlike existing methods that optimize for a single request or a group of requests as a whole, TETRIS actively selects the most promising draft tokens (for every request in a batch) to be accepted when verified in parallel, resulting in fewer rejected tokens and hence less wasted computing resources. Such an effective resource utilization to achieve fast inference in large language models (LLMs) is especially important to service providers with limited inference capacity. Compared to baseline speculative decoding, TETRIS yields a consistently higher acceptance rate and more effective utilization of the limited inference capacity. We show theoretically and empirically that TETRIS outperforms baseline speculative decoding and existing methods that dynamically select draft tokens, leading to a more efficient batch inference in LLMs.
