---
layout: single
# title: "About"
permalink: /about/
author_profile: true
---

<div style="text-align: left; margin-bottom: 2em;">
  <h2 style="color: #2c3e50; font-size: 2.2em; margin-bottom: 0.5em;">👋 Nice to meet you!</h2>
  <p style="font-size: 1.1em; color: #2c3e50; line-height: 1.6;">
    My name is <strong>Zijian</strong>. I am a second-year PhD candidate advised by <strong>Bryan Kian Hsiang Low</strong> at NUS. 
    I am currently also a research engineer at Singapore-MIT Alliance for Research and Technology Centre (SMART), 
    advised by <strong>Daniela Rus</strong> at MIT. Prior to that, I completed my undergraduate studies at NUS, majoring in Computer Science and Mathematics. I also interned at TikTok (Singapore) as an ML engineer for a year on the advertisement moderation team.
  </p>
</div>

## 🔬 Research Interests

<div style="color: #2c3e50; line-height: 1.8; margin: 1em 0;">

My research journey began with a <strong>game-theoretic perspective</strong> of machine learning. As data increasingly becomes the fuel that powers large-scale ML models, it is imperative to effectively <strong>value, curate, and attribute data</strong> to make modern ML systems more reliable, fair, and efficient.

My initial research focus was on estimating the value of data in machine learning model training, which involves two key questions:
1. How can we provide "fair" valuation to all data such that data providers are rewarded equitably?
2. How can we evaluate the value of data in privacy-preserving ML settings?

With the advent of <strong>Large Language Models (LLMs)</strong>, my research interests have gradually shifted toward understanding the "data" aspects of LLMs. Instead of focusing solely on pre-training data, I now concentrate on post-training aspects including reinforcement fine-tuning, prompt optimization, and inference speedups.

</div>

### 🎯 Current Research Focus Areas

<div style="display: flex; flex-direction: column; gap: 2em; margin: 2.5em 0;">

<div style="
  background: #fff;
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(52, 152, 219, 0.15);
  border: 2px solid #3498db;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
">
  <h4 style="
    color: #3498db;
    margin: 0 0 1em 0;
    font-size: 1.4em;
    font-weight: 600;
    letter-spacing: -0.02em;
  ">Reinforcement Fine-tuning</h4>
  <p style="
    line-height: 1.7;
    color: #4a5568;
    margin: 0;
    font-size: 1.05em;
    font-weight: 400;
  ">
    Past research has demonstrated the effectiveness of reinforcement learning in improving LLM performance, including aligning with human preferences and strengthening reasoning capabilities. To achieve effective RL, a critical ingredient is learning the policy on trajectories that meet desired outcomes. An interesting problem is how to generate high-quality trajectories to make learning more efficient or enable agents to learn harder tasks.
  </p>
</div>

<div style="
  background: #fff;
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(52, 152, 219, 0.15);
  border: 2px solid #3498db;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
">
  <h4 style="
    color: #3498db;
    margin: 0 0 1em 0;
    font-size: 1.4em;
    font-weight: 600;
    letter-spacing: -0.02em;
  ">Prompt Optimization</h4>
  <p style="
    line-height: 1.7;
    color: #4a5568;
    margin: 0;
    font-size: 1.05em;
    font-weight: 400;
  ">
    A newly emerged paradigm in LLMs is using prompts to alter model behavior or inject new knowledge through in-context learning (ICL). In ICL, task demonstrations are supplied in prompts so LLMs can learn during inference. This paradigm is analogous to classic ML training, where task demonstrations are like training samples. A natural research question is how to evaluate and interpret these demonstrations in the inference-time context.
  </p>
</div>

<div style="
  background: #fff;
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(52, 152, 219, 0.15);
  border: 2px solid #3498db;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
">
  <h4 style="
    color: #3498db;
    margin: 0 0 1em 0;
    font-size: 1.4em;
    font-weight: 600;
    letter-spacing: -0.02em;
  ">Speculative Decoding</h4>
  <p style="
    line-height: 1.7;
    color: #4a5568;
    margin: 0;
    font-size: 1.05em;
    font-weight: 400;
  ">
    Speculative decoding speeds up next token generation by employing a draft model to quickly speculate future tokens, then letting the target model verify them in parallel. We can treat the draft model as a <em>data generator</em> and the target model as a <em>data consumer</em>. Similar to data selection in ML training, we can carefully select draft tokens most likely to be accepted, or have the drafter generate many tokens and select the most probable ones for verification.
  </p>
</div>

</div>

## 🌟 Let's Connect!

<div style="text-align: left; margin-top: 3em;">
  <p style="color: #2c3e50; font-size: 1.1em; margin: 0;">
    I'm always excited to discuss research ideas, collaborate on projects, or simply chat about the fascinating world of AI and machine learning. Welcome to connect me on email, linkedin, or X (twitter) and let's chat!
  </p>
</div>
