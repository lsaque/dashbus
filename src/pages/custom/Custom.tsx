import {
  DropResult,
  ResponderProvided,
  DragDropContext,
  Droppable,
  Draggable
} from "@hello-pangea/dnd";
import { DeleteOutlined, SearchOutlined } from "@mui/icons-material";
import { IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  renderDefaultChart,
  renderExportationChart,
  renderIPCChart,
  renderSelicChart,
  renderSalesByDealership,
  renderUnemploymentChart,
  usePageContext
} from "../../common";
import { DraggableItemComponent, DroppableItemComponent } from "./components";

import { CustomStyles, GridLayoutStyles } from "./Custom.styles";

const DRAGGABLE_CHARTS_LIST = [
  {
    id: "drag-chart-0",
    title: "Índice de preço ao consumidor",
    element: renderIPCChart()
  },
  {
    id: "drag-chart-1",
    title: "SELIC",
    element: renderSelicChart()
  },
  {
    id: "drag-chart-2",
    title: "Exportação",
    element: renderExportationChart()
  },
  {
    id: "drag-chart-3",
    title: "Taxa de desemprego",
    element: renderUnemploymentChart()
  },
  {
    id: "drag-chart-4",
    title: "Venda de ônibus pelas concessionárias",
    element: renderSalesByDealership()
  },
  {
    id: "drag-chart-5",
    title: "AAAAAA",
    element: renderDefaultChart()
  },
  {
    id: "drag-chart-6",
    title: "AAAAAA",
    element: renderDefaultChart()
  },
  {
    id: "drag-chart-7",
    title: "AAAAAA",
    element: renderDefaultChart()
  },
  {
    id: "drag-chart-8",
    title: "AAAAAA",
    element: renderDefaultChart()
  }
];

export const CustomPage: React.FC = () => {
  const { pages, setPages, updatePageChart, removePageChart } =
    usePageContext();
  const { id: pageParamId } = useParams();

  const pageId = Number(pageParamId);
  const curPage = pages.find((page) => page.id === pageId);

  const onDragEnd = (result: DropResult, _provided: ResponderProvided) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const chartId = draggableId; //drag-chart-0
    const dropCardId = destination.droppableId; //drop-card-b

    const chart =
      DRAGGABLE_CHARTS_LIST[
        DRAGGABLE_CHARTS_LIST.findIndex((chart) => chart?.id === chartId)
      ];

    if (chart && curPage) {
      updatePageChart(pageId, dropCardId, chart.element, chart.title);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <CustomStyles>
        <GridLayoutStyles>
          {curPage?.charts?.map(({ id, gridArea, element, name }) => (
            <CardComponent
              key={id}
              gridArea={gridArea}
              isDroppable={!Boolean(element)}
            >
              <Droppable droppableId={id} isDropDisabled={Boolean(element)}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{ height: "100%", position: "relative" }}
                    {...provided.droppableProps}
                  >
                    {Boolean(element) && (
                      <>
                        <CardHeaderComponent
                          title={name}
                          action={
                            <IconButton
                              aria-label="Deletar gráfico"
                              onClick={() => {
                                removePageChart(pageId, id);
                              }}
                            >
                              <DeleteOutlined />
                            </IconButton>
                          }
                        />
                        <CardContentComponent>{element}</CardContentComponent>
                      </>
                    )}
                    <DroppableItemComponent
                      isDragingOver={
                        !snapshot.isDraggingOver && !Boolean(element)
                      }
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </CardComponent>
          ))}

          <CardComponent
            gridArea="e"
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <TextField
              variant="filled"
              sx={{ mt: 2.2 }}
              label="Pesquise"
              placeholder="Pesquise pela categoria"
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton edge="end">
                    <SearchOutlined />
                  </IconButton>
                )
              }}
            />

            <Droppable droppableId="charts-list">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px"
                  }}
                >
                  {DRAGGABLE_CHARTS_LIST.map(
                    ({ id, element, title }, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            style={{ height: "100%", position: "relative" }}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <DraggableItemComponent
                              chart={element}
                              title={title}
                            />
                          </div>
                        )}
                      </Draggable>
                    )
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </CardComponent>
        </GridLayoutStyles>
      </CustomStyles>
    </DragDropContext>
  );
};
