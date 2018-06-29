# Sizing
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [Sizing](#sizing)

- [Assumptions & Findings](#assumptions--findings)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
### Assumptions & Findings
- Typically, the base size is nearer to the smallest size than the largest size.  Therefore, step size granularity is more important in the upper scale than in the lower scale.
- Five sizes is too few to be useful in many cases.
- Unlimited scalar sizes, or too many sizes, is unruly and does not represent real world apps.  Most apps have finite sizes.
### Constraints
- There should be more large sizes than small.
- There should be more than 5 sizes.
- There should be a finite number of sizes.
- Sizes should be understandable.
- Sizes should not be numbers.
### Proposals
1. T-Shirt
    xs, s, m, l, xl
1. T-Shirt w/medium variants
    xs, s, ms, m, ml, l, xl
1. T-Shirt, scaling large
    xs, s, m, l, xl, 2x, 3x, 4x
1. OCD compliant T-Shirt, scaling large
    xs, sm, md, lg, xl, 2x, 3x, 4x