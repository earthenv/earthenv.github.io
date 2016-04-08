Data description from  [Wilson AM, Jetz W (2016) Remotely Sensed High-Resolution Global Cloud Dynamics for Predicting Ecosystem and Biodiversity Distributions. PLoS Biol 14(3): e1002415. doi:10.1371/journal. pbio.1002415](http://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002415)
====

## Data background
Let $m$ index months ($m \in 1:12)$ and $y$ index years ($y \in 2000: 2014$). The monthly time series of cloud frequency were summarized to “climatological” mean cloud frequencies and standard deviations: $\mu_m = mean(CF_{m,y})$ and $\sigma_m = SD(CF_{m,y})$

## MODCF_monthlymean_01-12*
Mean monthly cloud frequency (%) over 2000-2014, $\mu_m = mean(CF_{m,y})$. Valid values range from 0-10,000 and need to be multiplied by 0.01 to result in % cloudy days.  Values greater than 10,000 are used for fill.

## MODCF_meanannual
Mean annual cloud frequency (%) over 2000-2014, $mean(\mu_m)$. Valid values range from 0-10,000 and need to be multiplied by 0.01 to result in % cloudy days.  Values greater than 10,000 are used for fill.

## MODCF_intraannualSD
Within-year seasonality represented as the standard deviation of mean 2000-2014 monthly cloud frequencies, $SD(\mu_m)$. Values need to be multiplied by 0.01 to recover SD. 

## MODCF_interannualSD
Mean between-year seasonality represented as the mean of the 2000-2014 monthly standard deviations, $mean(\sigma_m)$. Values need to be multiplied by 0.01 to recover SD. 

## MODCF_seasonality_concentration
Seasonal cloud concentration index (see methods for full description) ranging from 0 (all months equally cloudy) to 100 (all clouds are observed in a single month).  Valid values range from 0-10,000 and need to be multiplied by 0.01.

## MODCF_seasonality_theta
Timing of peak seasonal cloud concentration (see methods for full description) expressed as an angle (degrees) ranging from 0 (peak cloudiness observed on January 1st) to 360 (peak cloudiness observed on December 31st).  Valid values range from 0-3600 and need to be multiplied by 0.1 to recover degrees.  To convert to Julian Day (Day of Year), multiply by 0.1013889 instead of 0.01.

## MODCF_seasonality_RGB
3-band (Red-green-blue) version that combines seasonality concentration and angle (theta) as displayed in Figure 2 of the paper.  This layer is for display only (if you want to use seasonality data, use the _concentration and/or _theta files).  This is for display only.

## CloudForestPrediction
Relative occurrence rate (unitless) of tropical montane cloud forests estimated using an inhomogeneous point process model of 529 cloud forest locations with the new cloud metrics and elevation. See methods section of paper for details.
