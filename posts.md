---
layout: page
Title: posts
---


List of posts:
<ul>
{%- for post in site.posts -%}
    <li> {{post.title}} </li>
{%- endfor -%}
</ul>