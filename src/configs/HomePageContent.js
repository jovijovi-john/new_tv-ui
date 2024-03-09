import TVUfmaIcon from "../assets/emissoras/tvufma.jpg"
import SBTIcon from "../assets/emissoras/SBT.png"
import GloboIcon from "../assets/emissoras/Globo.svg"
import RedeTVIcon from "../assets/emissoras/redeTV.png"
import CanalGov from "../assets/emissoras/canalGov.svg"

// Apps Icons
import PrimeVideoIcon from "../assets/apps/primeVideo.png"
import PlutoTVIcon from "../assets/apps/pluto-logo.webp"
import HuluIcon from "../assets/apps/hulu.png"
import NetflixIcon from "../assets/apps/netflix.png"
import HBOIcon from "../assets/apps/hbo.png"

/*
  emissora: {
    iconEmissora: Imagem;
    programaInicial: Programa;
    relacionados: string[]
  }
*/

export const emissoras = {
  tvUfma: {
    iconEmissora: TVUfmaIcon,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },

  globo: {
    iconEmissora: GloboIcon,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },

  redeTv: {
    iconEmissora: RedeTVIcon,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },

  sbt: {
    iconEmissora: SBTIcon,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },

  canalGov: {
    iconEmissora: CanalGov,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },
}

export const aplicativos = {
  HBO: {
    iconApp: HBOIcon,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },

  netflix: {
    iconApp: NetflixIcon,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },

  primeVideo: {
    iconApp: PrimeVideoIcon,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },

  hulu: {
    iconApp: HuluIcon,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },

  plutoTVIcon: {
    iconApp: PlutoTVIcon,
    programaInicial: {
      horarioInicio: "10:00",
      horarioFim: "12:00",
      nomePrograma: "Nome do Programa",
      descricaoDoPrograma: "DescricaoDoPrograma",
    },
    relacionados: [
      "redeTv",
      "tvUfma",
      "globo",
      "sbt",
      "tvSenado"
    ]
  },
}
