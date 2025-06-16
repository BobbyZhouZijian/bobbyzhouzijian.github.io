---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Education

<table style="width: 100%; color: #2c3e50; border-collapse: collapse; margin: 1em 0;">
  <thead>
    <tr style="border-bottom: 2px solid #ecf0f1;">
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #3498db;">🎯 Degree</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #3498db;">🏛️ Institution</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #3498db;">📅 Years</th>
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

## Work Experience

<table style="width: 100%; color: #2c3e50; border-collapse: collapse; margin: 1em 0;">
  <thead>
    <tr style="border-bottom: 2px solid #ecf0f1;">
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #3498db;">💡 Position</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #3498db;">🏢 Institution</th>
      <th style="padding: 0.8em; text-align: left; font-size: 1.1em; color: #3498db;">📅 Years</th>
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

## Research Interests

- **Machine Learning**: Data valuation, model interpretability, fairness in AI
- **Large Language Models**: In-context learning, speculative decoding, data-centric AI
- **Privacy-Preserving ML**: Differential privacy, federated learning
- **Optimization**: Gradient-based methods, active learning algorithms

---

## Publications

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---

## Honors and Awards

- **Outstanding Graduate Student Award**, Computer Science Department, 2024
- **Best Paper Award**, AAAI 2023 (for "Probably Approximate Shapley Fairness")
- **Graduate Fellowship**, University Name, 2021-2024
- **Dean's List**, University Name, 2017-2019

---

## Technical Skills

**Programming Languages**: Python, C++, Java, JavaScript, R  
**ML/AI Frameworks**: PyTorch, TensorFlow, Hugging Face, scikit-learn  
**Tools & Technologies**: Git, Docker, AWS, GCP, Jupyter, LaTeX  
**Databases**: PostgreSQL, MongoDB, Redis  

---

## Professional Service

**Conference Reviewing**
- NeurIPS (2023, 2024), ICML (2024), AAAI (2023, 2024)
- EMNLP (2024), ACL (2024, 2025)

**Workshop Organization**
- Co-organizer, Workshop on Data-Centric AI, NeurIPS 2024

---

## Talks and Presentations

<ul>{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}</ul>

---

## Teaching Experience

<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
