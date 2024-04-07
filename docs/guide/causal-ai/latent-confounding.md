---
sidebar_position: 3
---

# Latent Confounding

Latent confounding is a common problem in causal inference. It occurs when there is an unobserved variable that affects two or more observed variables. This can generate the impression of a causal relationship between the observed variables, when in fact the relationship is spurious and is due to this unobserved common cause.

Other causal inference methods such as standard regression models, DoubleML, etc are typically unable to handle latent confounding, as they rely on the assumption that all confounders are observed. However, CausaDB uses techniques to simulate the effects of unobserved confounders, allowing you to estimate causal effects even in the presence of latent confounding. This can be used to stress-test your causal models and understand the robustness of your conclusions and recommendations.