import React, { useEffect } from 'react';
import { setDefaultOptions, loadModules } from 'esri-loader';
import Search from '@arcgis/core/widgets/Search';
import { useMapView } from '../../context/MapView/index';
import * as S from './style';

const BaseMap = ({
  center = [0, 0],
  zoom = 10,
  basemap = 'streets-navigation-vector',
}) => {
  setDefaultOptions({ version: '4.19', css: true });

  const { setMapView } = useMapView();

  useEffect(() => {
    loadModules(['esri/Map', 'esri/views/MapView']).then(
      ([ArcGISMap, MapView]) => {
        const map = new ArcGISMap({
          basemap,
        });

        const view = new MapView({
          container: 'mapViewDiv',
          map,
          center,
          zoom,
        });

        const searchWidget = new Search({
          view,
        });

        view.ui.add(searchWidget, 'top-left');

        setMapView([map, view]);
      }
    );
  }, [basemap, center, setMapView, zoom]);

  return <S.Container id="mapViewDiv" />;
};

export default BaseMap;
