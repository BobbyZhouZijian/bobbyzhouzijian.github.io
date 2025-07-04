---
title: "DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning"
collection: publications
category: conferences
permalink: /publication/detail
excerpt: '<img src="/images/detail_gif.gif" alt="DETAIL Algorithm Demo" style="width: 100%; height: auto; margin: 1px auto; display: block; border-radius: 8px;">'
date: 2024-05-22
venue: 'NeurIPS 2024'
paperurl: 'https://arxiv.org/pdf/2405.14899'
bibtexurl: 'https://bobbyzhouzijian.github.io/files/detail.bib'
citation: # 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---
In-context learning (ICL) allows transformer-based language models that are pre-trained on general text to quickly learn a specific task with a few "task demonstrations" without updating their parameters, significantly boosting their flexibility and generality. ICL possesses many distinct characteristics from conventional machine learning, thereby requiring new approaches to interpret this learning paradigm. Taking the viewpoint of recent works showing that transformers learn in context by formulating an internal optimizer, we propose an influence function-based attribution technique, DETAIL, that addresses the specific characteristics of ICL. We empirically verify the effectiveness of our approach for demonstration attribution while being computationally efficient. Leveraging the results, we then show how DETAIL can help improve model performance in real-world scenarios through demonstration reordering and curation. Finally, we experimentally prove the wide applicability of DETAIL by showing our attribution scores obtained on white-box models are transferable to black-box models in improving model performance.