import html from "../../img/skills/html.svg";
import chakra from "../../img/skills/chakra.svg";
import css from "../../img/skills/css.svg";
import angular from "../../img/skills/angular.svg";
import javascript from "../../img/skills/javascript.svg";
import express from "../../img/skills/express.svg";
import react from "../../img/skills/react.svg";
import redux from "../../img/skills/redux.svg";
import nodejs from "../../img/skills/nodejs.svg";
import typescript from "../../img/skills/typescript.svg";
import bootstrap from "../../img/skills/bootstrap.svg";
import mongodb from "../../img/skills/mongodb.svg";
import git from "../../img/skills/git.svg";
import canva from "../../img/skills/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "chakra":
      return chakra;
    case "html":
      return html;

    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    

    case "react":
      return react;
    case "git":
      return git;

    case "typescript":
      return typescript;

    case "bootstrap":
      return bootstrap;
      
    case "mongodb":
      return mongodb;

    case "redux":
      return redux;
    case "express":
      return express;
    case "nodejs":
      return nodejs;

    case "canva":
      return canva;
    default:
      break;
  }
};
