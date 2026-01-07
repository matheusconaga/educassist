import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  AlignmentType,
  TextRun,
  WidthType,
  PageOrientation,
} from "docx";

type PlanoDeAula = {
  unidade_tematica: string;
  habilidade_meta: string;
  objeto_de_conhecimento: string;
  orientacoes_metodologicas: string;
  criterios_de_avaliacao: string;
};

type PlanoDocxParams = {
  plano: PlanoDeAula;
  disciplina: string;
  nivelEscolaridade: string;
  nomeArquivo?: string;
};

export function gerarPlanoDeAulaDocx({
  plano,
  disciplina,
  nivelEscolaridade,
  nomeArquivo = "plano_de_aula.docx",
}: PlanoDocxParams) {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              orientation: PageOrientation.LANDSCAPE,
            },
          },
        },

        children: [
          new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 100 },
  children: [
    new TextRun({
      text: `COMPONENTE CURRICULAR: ${disciplina}`,
      bold: true,
    }),
  ],
}),

new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 200 },
  children: [
    new TextRun({
      text: `ETAPA: ${nivelEscolaridade}`,
      bold: true,
    }),
  ],
}),


          new Table({
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows: [
              new TableRow({
                children: [
                  headerCell("UNIDADE TEMÁTICA"),
                  headerCell("HABILIDADES"),
                  headerCell("OBJETO DE CONHECIMENTO"),
                  headerCell("ORIENTAÇÕES METODOLÓGICAS"),
                  headerCell("CRITÉRIOS DE AVALIAÇÃO"),
                ],
              }),

              new TableRow({
                children: [
                  valueCell(plano.unidade_tematica),
                  valueCell(plano.habilidade_meta),
                  valueCell(plano.objeto_de_conhecimento),
                  valueCell(plano.orientacoes_metodologicas),
                  valueCell(plano.criterios_de_avaliacao),
                ],
              }),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    downloadBlob(blob, nomeArquivo);
  });
}

function headerCell(text: string) {
  return new TableCell({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text,
            bold: true,
          }),
        ],
      }),
    ],
  });
}

function valueCell(text: string) {
  return new TableCell({
    children: [
      new Paragraph({
        children: [new TextRun(text)],
      }),
    ],
  });
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
