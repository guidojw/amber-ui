export default {
  model: {
    activity: {
      name: {
        one: 'activiteit',
        other: 'activiteiten'
      }
    },
    articleComment: {
      name: {
        one: 'reactie',
        other: 'reacties'
      }
    },
    article: {
      name: {
        one: 'artikel',
        other: 'artikelen'
      }
    },
    debit: {
      collection: {
        name: {
          one: 'incasso',
          other: 'incasso\'s'
        }
      },
      mandate: {
        name: {
          one: 'mandaat',
          other: 'mandaten'
        }
      }
    },
    group: {
      name: {
        one: 'groep',
        other: 'groepen'
      }
    },
    mailAlias: {
      name: {
        one: 'mail-alias',
        other: 'mail-aliassen'
      }
    },
    mailModeration: {
      name: {
        one: 'mail-moderatie',
        other: 'mail-moderaties'
      }
    },
    forum: {
      name: {
        one: 'forum',
        other: 'fora'
      }
    },
    photoAlbum: {
      name: {
        one: 'foto-album',
        other: 'foto-albums'
      }
    },
    photoComment: {
      name: {
        one: 'fotoreactie',
        other: 'fotoreacties'
      }
    },
    photo: {
      name: {
        one: 'foto',
        other: 'foto\'s'
      }
    },
    poll: {
      name: {
        one: 'poll',
        other: 'polls'
      }
    },
    staticPage: {
      name: {
        one: 'infopagina',
        other: 'infopagina\'s'
      }
    },
    user: {
      name: {
        one: 'gebruiker',
        other: 'gebruikers'
      }
    }
  },
  template: {
    articles: {
      show: {
        publicAlert: 'Dit artikel is ook te zien voor niet-leden, dat geldt ook voor de reacties die er geplaatst worden. Het is natuurlijk heel fijn om te laten zien hoe actief Alpha is, maar houd er wel rekening mee als je wat plaatst.',
        commentHint: 'Typ hier je reactie'
      }
    },
    index: {
      public: {
      }
    },
    login: {
      authcode: 'Authenticatiecode',
      authcodeHint: 'Open de authenticatie app op je telefoon en geef hier de zescijferige authenticatiecode op. Authenticatie codes kwijtgeraakt? Neem dan contact op met de beheerders van de site voor identificatie.',
      username: 'Gebruikersnaam',
      password: 'Wachtwoord',
      forgotPassword: 'Wachtwoord vergeten?'
    },
    users: {
      forgotPassword: {
        recoverPassword: 'Wachtwoord herstellen',
        email: 'E-mailadres'
      }
    },
    photos: {
      show: {
        photographer: 'Foto geüpload door'
      }
    }
  },
  component: {
    cards: {
      articleCard: {
        reactions: {
          one: '- 1 reactie',
          other: '- {{count}} reacties'
        }
      }
    },
    headerNav: {
      changeLocale: 'Change language to English'
    },
    footerNav: {
      by: 'Met trots gebrouwen door de ICT-commissie der C.S.V. Alpha | © '
    },
    index: {
      about: {
        title: 'Onze Sociëteit',
        info: 'Aan de Oude Markt, staat de Pakkerij. Een imposant wit gebouw waar vier studentenverenigingen gehuisvest zijn. Op de bovenste verdieping bevindt zich de sociëteit van C.S.V. Alpha, \'Sociëteit Flux\'. Elke donderdagavond wordt er in deze gezellige ruimte een sociëteitsavond gehouden, maar Flux wordt ook gebruikt voor Sing-Ins, thema-avonden en wordt soms verhuurd aan anderen.',
        more: 'Naar de website van Flux »'
      },
      actionButtons: {
        room: 'Zoek jij een kamer in Enschede? Of zoek je een logeerplek tijdens de introductie? Laat hier je gegevens achter en wij proberen jou te helpen in jouw zoektocht!',
        roomButton: 'Ik zoek een kamer!',
        member: 'Lid worden bij Alpha? Dat kan op een van onze activiteiten! Laat hier je mail achter en we nemen contact met je op!',
        memberButton: 'Ik heb interesse!'
      },
      activities: {
        slogan: 'Voor wie gelooft in een studententijd!',
        info: 'Alpha is een christelijke studentenvereniging. Onze open sfeer zorgt ervoor dat je je snel welkom voelt. We worden met ruim 100 leden vaak dé christelijke gezelligheidsvereniging van Enschede genoemd. In onze eigen sociëteit Flux in de Pakkerij aan de Oude Markt houden we van goede gesprekken onder het genot van een biertje. Je bent ook van harte uitgenodigd om een keertje langs te komen.',
        title: 'Activiteiten'
      },
      photos: {
        more: 'Bekijk meer foto\'s »'
      },
      recentNews: {
        title: 'Recent nieuws',
        more: 'Meer recent nieuws »'
      },
      stories: {
        title: 'Verhalen van leden',
        of: 'Verhaal van {{name}}',
        laurens1: 'Hehe! Ik ben Laurens. In mijn eerste jaar als student ben ik bij Alpha gegaan. Tijdens de Kick-In ben ik in aanraking gekomen met de vereniging. Ik twijfelde in het begin nog of ik wel bij een studentenvereniging wilde, maar ik wilde graag nieuwe (christelijke) vrienden maken in een nieuwe omgeving. Hiervan heb ik absoluut geen spijt gekregen. In mijn eerste jaar heb ik veel nieuwe contacten gemaakt en genoten van de activiteiten. Van studeren, sporten en een biertje drinken met elkaar tot aan epische weekenden in binnen- en buitenland.',
        laurens2: 'Resultaat na het eerste jaar? Nieuwe vriendschappen, diepe en goede geloofsgesprekken en veel nieuwe ervaring opgedaan in commissies. Na een half jaar kwam ben ik in een Alpha huis gaan wonen. Het samen wonen met christelijke studenten is super gaaf en toereikend. Verder organiseren we als huis epische activiteiten  en is iedereen altijd welkom! Kortom, ben je op zoek naar gezelligheid, vriendschap en uitdaging in je geloofsleven, dan is Alpha echt iets voor jou!',
        luuk1: 'Hey, ik ben Luuk. Toen ik in Enschede kwam ben ik niet direct bij een studentenvereniging gegaan omdat ik niet dacht dat het iets voor mij zou zijn. Na eerst een jaar gestudeerd te hebben nam een vriend van mijn studie me echter een keer mee naar een borrel van Alpha. Daar heb ik toen zo’n gezellige avond gehad dat ik er toch maar serieus over na ging denken om toch bij een vereniging te gaan. Na nog een aantal intro activiteiten wist ik het zeker, ik ga bij Alpha. ',
        luuk2: 'En daar heb ik tot op de dag van vandaag absoluut geen spijt van gehad. Bij Alpha heb ik vrienden gemaakt, in commissies gezeten en ben ik dieper over het geloof gaan nadenken.  Van serieuze gesprekken tot gezellige borrels en zo en dan een mooi feestjes, dat is precies de combinatie die ik  zo tof vind aan Alpha. Ben je geïnteresseerd? Kom dan zeker eens langs!',
        susan: 'Hoihoi, mijn naam is Susan. Toen ik twee jaar geleden naar Enschede kwam was ik nooit van plan om bij een studentenvereniging te gaan. Toch werd ik door huisgenoten een aantal keer meegesleept naar Alpha en ik was al snel verkocht. Door de grootte diversiteit binnen de vereniging is er altijd wel wat nieuws te beleven. Soms is dat een toffe commissie en een andere keer een lang goed gesprek in de kroeg. Ook op geloofsgebied is er voor ieder wat wils, met hele diverse kringen die je zelf mag kiezen kan je elk jaar weer opnieuw bedenken waar je mee bezig wilt. Zo denk ik dat je bij Alpha veel ruimte krijgt om te groeien en te ontdekken in je geloof. Ik heb erg veel van mijn persoonlijke ontwikkeling te danken aan Alpha en zou de keuze om erbij te gaan zo weer maken. Lijkt het jou ook leuk? Kom dan vooral een keer kijken en proef de sfeer zelf!',
        afke1: 'Heyhey! Al voor dat ik naar Enschede verhuisde hoorde ik goede verhalen over Alpha. Tijdens de introperiode heb ik veel activiteiten meegepakt en zo leerde ik Alpha nog veel beter kennen en heb ik besloten om lid te worden. Ondertussen is er een jaar verstreken en heb ik het nog steeds enorm naar mijn zin!',
        afke2: 'Wat mij enorm aanspreekt in de vereniging is dat iedereen welkom is. Er zijn leden uit allerlei verschillende kerken en ook niet-gelovige mensen, maar iedereen gaat met elkaar om en iedereen heeft het gezellig met iedereen. Zelf ben ik niet gelovig, maar ik voel me zeker helemaal op mijn plek binnen Alpha. De goede gesprekken, de vriendschappen en de epische borrels en feesten in onze sociëteit zorgen ervoor dat Alpha een superinvulling is van mijn studententijd in Enschede!'
      }
    },
    socialMediaButtons: {
      facebook: 'Like ons op Facebook',
      instagram: 'Volg ons op Instagram'
    }
  },
  mixin: {
    menuItems: {
      recent: 'Actueel',
      association: 'Vereniging',
      members: 'Leden',
      information: 'Informatie',
      sponsorkliks: 'Sponsorkliks',
      profile: 'Profiel',
      settings: 'Instellingen',
      mailaliases: 'Mail Aliassen',
      collections: 'Incasso\'s',
      mailModerations: 'Mail moderaties',
      mandates: 'Mandaten',
      tomato: 'Streepsysteem',
      home: 'Home',
      articles: 'Artikelen',
      activities: 'Activiteiten',
      forum: 'Forum',
      photoAlbums: 'Foto-albums',
      polls: 'Polls',
      groups: 'Groepen',
      users: 'Gebruikers',
      staticPages: 'Informatie'
    }
  },
  tag: {
    button: {
      close: 'Sluiten',
      readMore: 'Meer lezen',
      signin: 'Inloggen',
      signout: 'Uitloggen',
      react: 'Reageren',
      authenticate: 'Authenticeren'
    },
    input: {
      types: {
        text: 'Korte tekst',
        textarea: 'Lange tekst',
        number: 'Nummer',
        radio: 'Één optie mogelijk',
        checkbox: 'Meerdere opties mogelijk'
      }
    }
  }
};
