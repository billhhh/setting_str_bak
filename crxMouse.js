{
  "cfgver": 2.3,
  "drag": {
    "ddirect": true,
    "ddirectcolor": "5E6A88",
    "ddirectopa": 0.9,
    "dholdkey": "none",
    "dragimage": true,
    "draginput": false,
    "draglink": true,
    "dragtext": true,
    "dragui": true,
    "dstroke": true,
    "dstrokecolor": "4E1485",
    "dstrokeopa": 0.8,
    "dstrokewidth": 5,
    "dtooltip": true,
    "dtooltipcolor": "120310",
    "dtooltipopa": 0.9,
    "dtooltipwidth": 18,
    "image": [
      {
        "action": "I_open",
        "direct": "L",
        "moreDes": "Open image in new tab(New tab & Background)",
        "morePinned": "unpinned",
        "morePosition": "chrome",
        "moreTarget": "newback"
      },
      {
        "action": "I_open",
        "direct": "R",
        "moreDes": "Open image in new tab(New tab & Front)",
        "morePinned": "unpinned",
        "morePosition": "chrome",
        "moreTarget": "newfront"
      }
    ],
    "imgfirst": "none",
    "imgfirstcheck": false,
    "link": [
      {
        "action": "L_open",
        "direct": "L",
        "moreDes": "Open link in new tab(New tab & Background)",
        "morePinned": "unpinned",
        "morePosition": "chrome",
        "moreTarget": "newback"
      },
      {
        "action": "L_open",
        "direct": "R",
        "moreDes": "Open link in new tab(New tab & Front)",
        "morePinned": "unpinned",
        "morePosition": "chrome",
        "moreTarget": "newfront"
      }
    ],
    "setdragurl": true,
    "text": [
      {
        "direct": "L",
        "action": "T_searchuser",
        "moreName": "Baidu",
        "moreURL": "https://www.baidu.com/s?wd=%s",
        "moreDes": "Use %name to search \"%s\"",
        "moreTarget": "newfront",
        "morePosition": "chrome",
        "morePinned": "unpinned"
      },
      {
        "action": "T_search",
        "direct": "R",
        "moreDes": "Use %name to search \"%s\"(New tab & Front)",
        "morePinned": "unpinned",
        "morePosition": "chrome",
        "moreTarget": "newfront",
        "moreTsearch": "sgoogle"
      },
      {
        "direct": "D",
        "action": "T_searchuser",
        "moreName": "Google-Translate",
        "moreURL": "https://translate.google.com/#auto/zh-cn/%s",
        "moreDes": "Use %name to search \"%s\"",
        "moreTarget": "newfront",
        "morePosition": "chrome",
        "morePinned": "unpinned"
      }
    ]
  },
  "extid": "jlgkpaicikihijadgifklkbpdajbkhjo",
  "gesture": {
    "direct": true,
    "directcolor": "5E6A88",
    "directopa": 0.9,
    "gesPos": "cc",
    "geskey": "right",
    "gesture": [
      {
        "action": "G_back",
        "direct": "L"
      },
      {
        "action": "G_go",
        "direct": "R"
      },
      {
        "direct": "U",
        "action": "G_top"
      },
      {
        "direct": "D",
        "action": "G_bottom"
      },
      {
        "direct": "DR",
        "action": "G_close",
        "moreCloseurl": "chrome://newtab/",
        "moreClosesel": "chrome",
        "moreCloseopts": "close"
      },
      {
        "direct": "RL",
        "action": "G_reclosedtab",
        "moreDes": "Reopen closed tab",
        "moreTarget": "newfront",
        "morePosition": "chrome",
        "morePinned": "unpinned"
      },
      {
        "direct": "UL",
        "action": "G_lefttab"
      },
      {
        "direct": "UR",
        "action": "G_righttab"
      }
    ],
    "gestureui": true,
    "gholdkey": "none",
    "stenable": false,
    "stroke": true,
    "strokecolor": "00BFFF",
    "strokeopa": 0.8,
    "strokewidth": 5,
    "tooltip": true,
    "tooltipcolor": "120310",
    "tooltipopa": 0.9,
    "tooltipwidth": 18
  },
  "normal": {
    "autocancel": false,
    "autocancelvalue": 2,
    "cancelcontextmenu": true,
    "capturetype": "jpeg",
    "dbclicktime": 600,
    "drag": true,
    "gesture": true,
    "jpegquality": 100,
    "lasttab": false,
    "minilength": 10,
    "newtabposition": "chrome",
    "scroll": false,
    "scrolleffects": true,
    "scrollgesture": false,
    "strokegesture": false
  },
  "others": {
    "tuilink": false
  },
  "scroll": {
    "scrollaccele": 1,
    "scrollspeed": 3,
    "smooth": true
  },
  "scrollgesture": {
    "fastSwitch": false,
    "reverseFS": false,
    "sgsleft": [
      {
        "action": "G_top"
      },
      {
        "action": "G_bottom"
      }
    ],
    "sgsleftenable": true,
    "sgsright": [
      {
        "action": "G_top"
      },
      {
        "action": "G_bottom"
      }
    ],
    "sgsrightenable": false,
    "tablist": true,
    "tablistVisual": true,
    "tablistkey": "right"
  },
  "strokegesture": {
    "strleft": [
      {
        "action": "G_none"
      },
      {
        "action": "G_righttab"
      }
    ],
    "strleftenable": true,
    "strmiddle": [
      {
        "action": "G_lefttab"
      },
      {
        "action": "G_righttab"
      }
    ],
    "strmiddleenable": false,
    "strpress": "up",
    "strright": [
      {
        "action": "G_lefttab"
      },
      {
        "action": "G_none"
      }
    ],
    "strrightenable": true
  },
  "sync": true
}
