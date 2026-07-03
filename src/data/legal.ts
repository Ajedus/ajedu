/**
 * Legal content for ajEdu.
 */

export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export const termsData: LegalDocument = {
  title: 'Terminos de uso',
  lastUpdated: '4 de julio de 2026',
  sections: [
    {
      id: 'purpose',
      title: '1. Finalidad',
      content:
        'ajEdu es una red internacional dedicada a compartir recursos, experiencias, publicaciones y proyectos relacionados con el ajedrez educativo. El uso de esta web implica aceptar un acceso responsable a sus contenidos.',
    },
    {
      id: 'content',
      title: '2. Contenidos y materiales',
      content:
        'Los materiales, enlaces y publicaciones se ofrecen con finalidad educativa, divulgativa y colaborativa. Cuando un contenido proceda de una persona, entidad o proyecto concreto, se mantendra la referencia correspondiente siempre que este disponible.',
    },
    {
      id: 'collaboration',
      title: '3. Colaboraciones',
      content:
        'Las personas o entidades que compartan recursos, experiencias o propuestas son responsables de que dichos materiales puedan difundirse y de que no vulneren derechos de terceros.',
    },
    {
      id: 'external-links',
      title: '4. Enlaces externos',
      content:
        'La web puede enlazar a blogs, webs colaboradoras, publicaciones o proyectos externos. ajEdu no controla necesariamente esos sitios y no se hace responsable de sus cambios, disponibilidad o contenidos.',
    },
    {
      id: 'changes',
      title: '5. Cambios en la web',
      content:
        'La estructura, los contenidos y los enlaces de la web pueden actualizarse para mejorar la informacion, incorporar nuevos recursos o retirar materiales que hayan quedado obsoletos.',
    },
    {
      id: 'contact',
      title: '6. Contacto',
      content:
        'Para comunicar errores, proponer recursos o solicitar cambios, puede escribirse a info@ajedu.com.',
    },
  ],
};

export const privacyData: LegalDocument = {
  title: 'Politica de privacidad',
  lastUpdated: '4 de julio de 2026',
  sections: [
    {
      id: 'data',
      title: '1. Datos personales',
      content:
        'Esta web esta planteada como un sitio informativo y estatico. No requiere registro de usuario ni cuenta personal para consultar sus contenidos.',
    },
    {
      id: 'contact',
      title: '2. Contacto por correo',
      content:
        'Si una persona escribe a info@ajedu.com, se utilizara la informacion facilitada exclusivamente para responder a la consulta, propuesta o comunicacion recibida.',
    },
    {
      id: 'downloads',
      title: '3. Recursos descargables',
      content:
        'Los documentos, imagenes o materiales descargables se ofrecen para consulta educativa. Cada recurso puede incluir sus propias condiciones de uso o autoria.',
    },
    {
      id: 'external-links',
      title: '4. Enlaces a terceros',
      content:
        'La web puede incluir enlaces a paginas externas, blogs o proyectos colaboradores. Al visitar esos sitios, se aplican sus propias politicas de privacidad.',
    },
    {
      id: 'cookies',
      title: '5. Cookies y analitica',
      content:
        'La version actual no incorpora un sistema propio de cuentas, pagos o seguimiento personalizado. Si en el futuro se activa analitica o servicios externos, se actualizara esta politica.',
    },
    {
      id: 'updates',
      title: '6. Actualizaciones',
      content:
        'Esta politica puede revisarse para reflejar cambios en la web, en los recursos ofrecidos o en las formas de contacto disponibles.',
    },
  ],
};
