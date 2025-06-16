---
layout: single
# title: "About"
permalink: /about/
author_profile: true
---

<div style="text-align: center; margin-bottom: 2em;">
  <h2 style="color: #2c3e50; font-size: 2.5em; margin-bottom: 0.5em;">👋 Nice to meet you!</h2>
  <p style="font-size: 1.2em; color: #34495e; line-height: 1.6;">
    My name is <strong>Zijian</strong>. I am a second-year PhD candidate advised by <strong>Bryan Kian Hsiang Low</strong> at NUS. 
    I am currently also a research engineer at Singapore-MIT Alliance for Research and Technology Centre (SMART) 
    advised by <strong>Daniela Rus</strong> at MIT.
  </p>
</div>

---

## 🎓 Education

<table style="width: 100%; color: #2c3e50; border-collapse: collapse; margin: 1em 0;">
  <thead>
    <tr style="border-bottom: 2px solid #ecf0f1;">
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #667eea;">🎯 Degree</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #667eea;">🏛️ Institution</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #667eea;">📅 Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.8em;"><strong>Ph.D. in Computer Science</strong></td>
      <td style="padding: 0.8em;">National University of Singapore</td>
      <td style="padding: 0.8em;">2023 – present</td>
    </tr>
    <tr>
      <td style="padding: 0.8em;"><strong>B.Comp. (Hons) in Computer Science</strong></td>
      <td style="padding: 0.8em;">National University of Singapore</td>
      <td style="padding: 0.8em;">2019 – 2023</td>
    </tr>
  </tbody>
</table>

---

## 💼 Experience

<table style="width: 100%; color: #2c3e50; border-collapse: collapse; margin: 1em 0;">
  <thead>
    <tr style="border-bottom: 2px solid #ecf0f1;">
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #f093fb;">💡 Position</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #f093fb;">🏢 Institution</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #f093fb;">📅 Years</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.8em;"><strong>Research Engineer</strong></td>
      <td style="padding: 0.8em;">Singapore-MIT Alliance for Research and Technology Centre (SMART)</td>
      <td style="padding: 0.8em;">Aug 2023 – present</td>
    </tr>
    <tr>
      <td style="padding: 0.8em;"><strong>ML Engineer Intern</strong></td>
      <td style="padding: 0.8em;">TikTok</td>
      <td style="padding: 0.8em;">Mar 2021 – Mar 2022</td>
    </tr>
  </tbody>
</table>

---

## 🔬 Research Interests

<div style="background: #fff; padding: 2em; border-radius: 15px; margin: 1em 0; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-left: 5px solid #4facfe;">

<div style="color: #2c3e50; line-height: 1.8;">

My research journey began with a **game-theoretic perspective** of machine learning. As data increasingly becomes the fuel that powers large-scale ML models, it is imperative to effectively **value, curate, and attribute data** to make modern ML systems more reliable, fair, and efficient.

My initial research focus was on estimating the value of data in machine learning model training, which involves two key questions:
1. How can we provide "fair" valuation to all data such that data providers are rewarded equitably?
2. How can we evaluate the value of data in privacy-preserving ML settings?

With the advent of **Large Language Models (LLMs)**, my research interests have gradually shifted toward understanding the "data" aspects of LLMs. Instead of focusing solely on pre-training data, I now concentrate on post-training aspects including reinforcement fine-tuning, prompt optimization, and inference speedups.

</div>

</div>

### 🎯 Current Research Focus Areas

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5em; margin: 2em 0; align-items: stretch;">

<div style="background: #fff; padding: 1.5em; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-left: 5px solid #e74c3c; display: flex; flex-direction: column;">
  <h4 style="color: #e74c3c; margin-top: 0;">🚀 Reinforcement Fine-tuning</h4>
  <p style="line-height: 1.6; color: #2c3e50; flex-grow: 1;">
    Past research has demonstrated the effectiveness of reinforcement learning in improving LLM performance, including aligning with human preferences and strengthening reasoning capabilities. To achieve effective RL, a critical ingredient is learning the policy on trajectories that meet desired outcomes. An interesting problem is how to generate high-quality trajectories to make learning more efficient or enable agents to learn harder tasks.
  </p>
</div>

<div style="background: #fff; padding: 1.5em; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-left: 5px solid #3498db; display: flex; flex-direction: column;">
  <h4 style="color: #3498db; margin-top: 0;">💬 Prompt Optimization</h4>
  <p style="line-height: 1.6; color: #2c3e50; flex-grow: 1;">
    A newly emerged paradigm in LLMs is using prompts to alter model behavior or inject new knowledge through in-context learning (ICL). In ICL, task demonstrations are supplied in prompts so LLMs can learn during inference. This paradigm is analogous to classic ML training, where task demonstrations are like training samples. A natural research question is how to evaluate and interpret these demonstrations in the inference-time context.
  </p>
</div>

<div style="background: #fff; padding: 1.5em; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-left: 5px solid #2ecc71; display: flex; flex-direction: column;">
  <h4 style="color: #2ecc71; margin-top: 0;">⚡ Speculative Decoding</h4>
  <p style="line-height: 1.6; color: #2c3e50; flex-grow: 1;">
    Speculative decoding speeds up next token generation by employing a draft model to quickly speculate future tokens, then letting the target model verify them in parallel. We can treat the draft model as a <em>data generator</em> and the target model as a <em>data consumer</em>. Similar to data selection in ML training, we can carefully select draft tokens most likely to be accepted, or have the drafter generate many tokens and select the most probable ones for verification.
  </p>
</div>

</div>

<div style="text-align: center; margin-top: 3em;">
  <h3 style="color: #9b59b6; margin-bottom: 1em;">🌟 Let's Connect!</h3>
  <p style="color: #2c3e50; font-size: 1.1em; margin: 0;">
    I'm always excited to discuss research ideas, collaborate on projects, or simply chat about the fascinating world of AI and machine learning.
  </p>
</div>

---
