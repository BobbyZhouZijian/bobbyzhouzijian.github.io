---
layout: single
title: "About"
permalink: /about/
author_profile: true
---

Hice to meet you! My name is Zijian. I am a second-year PhD candidate advised by **Bryan Kian Hsiang Low** at NUS. I am currently also a research engineer at Singapore-MIT Alliance for Research and Technology Centre (SMART) advised by **Daniela Rus** at MIT.

---

## Education

<table>
  <tr>
    <th>Degree</th>
    <th>Institution</th>
    <th>Years</th>
  </tr>
  <tr>
    <td><strong>Ph.D. in Computer Science</strong></td>
    <td>National University of Singapore</td>
    <td>2023 – present</td>
  </tr>
  <tr>
    <td><strong>B.Comp. (Hons) in Computer Science</strong></td>
    <td>National University of Singapore</td>
    <td>2019 – 2023</td>
  </tr>
</table>

---

## Experience

<table>
  <tr>
    <th>Position</th>
    <th>Institution</th>
    <th>Years</th>
  </tr>
  <tr>
    <td><strong>Research Engineer</strong></td>
    <td>Singapore-MIT Alliance for Research and Technology Centre (SMART)</td>
    <td>2023 Aug – present</td>
  </tr>
  <tr>
    <td><strong>ML Engineer Intern</strong></td>
    <td>TikTok</td>
    <td>2021 Mar – 2022 Mar</td>
  </tr>
</table>

---

## Research Interests

My interest in research started with a game-theoretic perspective of ML. As data increasingly becomes the fuel that powers large-scale ML models, it is imperative to effectively **value, curate, and attribute data** to make modern ML systems more reliable, fair, and efficient. With the vision, my first research focus was to estimate the value of data in training of machine learning model, which inovolves 1) how to provide a "fair" valuation to all data such that the data providers are rewarded equitably? 2) how can we still evaluate the value of data in a private ML setting?

With the advent of LLMs, my research interest gradually shifts toward understanding the "data" aspect of LLMs. Instead of narrowing down to data in the pre-training stage, I focus more on post-training aspects including reinforcement fine-tuning, prompt optimization, and even inference speedups.

While it might be confusing at first that these aspect do not seem to be much related to "data", let me explain their relevance in more detail.

**Reinforcement Fine-tuning**
Past research has demonstrated the effectiveness of reinforcement learning in improving the performance of LLMs, including aligning it with human preference, and strenghening its reasoning capabilities. To achieve effective RL, a critical ingredient is to learn the policy (i.e., model) on trajectories that meet the desired outcomes (i.e., reaping high reward). These trajectories may be gathered from user feedback, verifiable reward function, or a reward model. An interesting problem is how to generate high-quality trajectories (a.k.a, data) to make learning more efficient, or enable the agent to learn harder tasks.

**Prompt Optimization**
A newly emerged paradigm in LLM is the use of prompt to alter model bahvior, or even inject new knowledge in the model, which is called in-context learning (ICL). In ICL, a few task demonstrations are supplied in prompt so that LLM can learn from these demonstrations *during inference*. Such a paradigm is akin to classic training of ML models, where task demonstrations are analogous to the training samples. A natural research question is to evaluate and interpret these task demonstrations. While many research efforts have been put to provide attribution to training samples in classic ML training, most of them rely on training gradients to analyze the impact of training samples on model performance. However, ICL is inference-time, meaning the task demonstrations do not alter model weights. How can we provide a meaningful attribution to task demonstrations in this case?

**Speculative Decoding**
xxx

---
