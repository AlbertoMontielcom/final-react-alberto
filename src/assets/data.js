const data = [
    {
      id: 1,
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c60f6cf9-77bf-40c4-a2be-d85fcd7018fa/dfr084t-162d701e-0fce-4bdd-b9be-00a700e2676e.png/v1/fill/w_1280,h_614,q_80,strp/aema_by_xaemax_dfr084t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvYzYwZjZjZjktNzdiZi00MGM0LWEyYmUtZDg1ZmNkNzAxOGZhXC9kZnIwODR0LTE2MmQ3MDFlLTBmY2UtNGJkZC1iOWJlLTAwYTcwMGUyNjc2ZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RM5zHHW49YhjXQQQgfLQBbKH-U2RaI1KK1oATOIZnAA",
      title: "Portfolio",
      description: 'www.albertomontiel.com'
    },
    {
        id: 2,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c60f6cf9-77bf-40c4-a2be-d85fcd7018fa/dfr0854-9ac89a1d-a200-409b-9346-3fcd098ff2e2.png/v1/fill/w_1280,h_614,q_80,strp/alaplaf_by_xaemax_dfr0854-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvYzYwZjZjZjktNzdiZi00MGM0LWEyYmUtZDg1ZmNkNzAxOGZhXC9kZnIwODU0LTlhYzg5YTFkLWEyMDAtNDA5Yi05MzQ2LTNmY2QwOThmZjJlMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.iDY20SSd9cke8anjBT0mVzRrwdqnUhmBcORtkodGAe8",
        title: "Org. Alaplaf",
        description: "www.alaplaf.com"
      }, 
      {
        id: 3,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c60f6cf9-77bf-40c4-a2be-d85fcd7018fa/dfr085c-55426eb7-9b1a-4dc0-9238-2b837d40bb1f.png/v1/fill/w_1280,h_614,q_80,strp/american_by_xaemax_dfr085c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvYzYwZjZjZjktNzdiZi00MGM0LWEyYmUtZDg1ZmNkNzAxOGZhXC9kZnIwODVjLTU1NDI2ZWI3LTliMWEtNGRjMC05MjM4LTJiODM3ZDQwYmIxZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KB-K60zhKlORlLARpeacBLR-JMUbaEJxuAvMuHX19CE",
        title: "Empresa A.A.C.",
        description: "www.americanasiacorp.com"
      },
      {
        id: 4,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c60f6cf9-77bf-40c4-a2be-d85fcd7018fa/dfr083g-d9442dec-89fd-4246-a8e4-0e7b07af33dc.png/v1/fill/w_1280,h_591,q_80,strp/autospa_by_xaemax_dfr083g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTkxIiwicGF0aCI6IlwvZlwvYzYwZjZjZjktNzdiZi00MGM0LWEyYmUtZDg1ZmNkNzAxOGZhXC9kZnIwODNnLWQ5NDQyZGVjLTg5ZmQtNDI0Ni1hOGU0LTBlN2IwN2FmMzNkYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BwUJbjlCW-MQK-ubXMvk9zzv3N25B-_GxxuK1vpw_pY",
        title: "Empresa AutoSpa",
        description: "www.autospaayd.com"
      },
      {
        id: 5,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c60f6cf9-77bf-40c4-a2be-d85fcd7018fa/dfr083j-63313363-57fc-475d-bae1-53ea47adb0ef.png/v1/fill/w_1280,h_614,q_80,strp/elysanto_by_xaemax_dfr083j-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvYzYwZjZjZjktNzdiZi00MGM0LWEyYmUtZDg1ZmNkNzAxOGZhXC9kZnIwODNqLTYzMzEzMzYzLTU3ZmMtNDc1ZC1iYWUxLTUzZWE0N2FkYjBlZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1TKcW22anFoipPOICZrseCaP_HhuCb_BrsykVYWT2Q8",
        title: "Centro Elysanto",
        description: "www.centrostudielysanto.it"
      },
      {
        id: 6,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c60f6cf9-77bf-40c4-a2be-d85fcd7018fa/dfr0848-87bf282e-fab9-4e21-80df-45b7f6f8a0fc.png/v1/fill/w_1280,h_614,q_80,strp/gma_by_xaemax_dfr0848-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvYzYwZjZjZjktNzdiZi00MGM0LWEyYmUtZDg1ZmNkNzAxOGZhXC9kZnIwODQ4LTg3YmYyODJlLWZhYjktNGUyMS04MGRmLTQ1YjdmNmY4YTBmYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.d-IS9owS524sRfpGiiqEZJ1t3LzsOpElOSqNyRcJhsY",
        title: "Colegio GMA",
        description: "www.gma.com.ve"
      },
      {
        id: 7,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c60f6cf9-77bf-40c4-a2be-d85fcd7018fa/dfr084i-a37ff091-99e1-4e02-ad0e-4698e6f8e25a.png/v1/fill/w_1280,h_594,q_80,strp/lpd_by_xaemax_dfr084i-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk0IiwicGF0aCI6IlwvZlwvYzYwZjZjZjktNzdiZi00MGM0LWEyYmUtZDg1ZmNkNzAxOGZhXC9kZnIwODRpLWEzN2ZmMDkxLTk5ZTEtNGUwMi1hZDBlLTQ2OThlNmY4ZTI1YS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ANmb9allVgtsbEx8Nx9VmpHGnBM0sVn2NKlm3C_2eu8",
        title: "Empresa LPD",
        description: "www.lpdhairextensions.shop"
      },
      {
        id: 8,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c60f6cf9-77bf-40c4-a2be-d85fcd7018fa/dfr084n-4c25cabe-7be5-4736-8181-b0e29aac8150.png/v1/fill/w_1280,h_580,q_80,strp/venetrier_by_xaemax_dfr084n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgwIiwicGF0aCI6IlwvZlwvYzYwZjZjZjktNzdiZi00MGM0LWEyYmUtZDg1ZmNkNzAxOGZhXC9kZnIwODRuLTRjMjVjYWJlLTdiZTUtNDczNi04MTgxLWIwZTI5YWFjODE1MC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pDO-YvNcl-tkAbMDJCGsKO_LBGKVH37V70rdxRMjQng",
        title: "Asoc. Venetrier",
        description: "www.venetrier.org"
      },
      {
        id: 8,
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c60f6cf9-77bf-40c4-a2be-d85fcd7018fa/dfr083y-50669b44-8ffe-48a3-b86f-3d0959832466.png/v1/fill/w_1280,h_621,q_80,strp/gilgares_by_xaemax_dfr083y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIxIiwicGF0aCI6IlwvZlwvYzYwZjZjZjktNzdiZi00MGM0LWEyYmUtZDg1ZmNkNzAxOGZhXC9kZnIwODN5LTUwNjY5YjQ0LThmZmUtNDhhMy1iODZmLTNkMDk1OTgzMjQ2Ni5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.I8dCOvu_VDCqVBIRBr-4YXhtvpPERt3Ca6Xi-j7HVh0",
        title: "Los Gilgares",
        description: "www.agropecuarialosgilgares.com"
      },
  ];
  
  export default data;
  