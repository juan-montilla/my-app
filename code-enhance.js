    if (expanded) {
      setLogoSrcImage(newTheme === 'light' ? logoSrcSun : logoSrcMoon);
      return;
    }
    setLogoSrcImageContracted(newTheme === 'light' ? logoSrcSunContracted : logoSrcMoonContracted);