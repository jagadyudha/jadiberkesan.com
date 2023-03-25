import React, { Fragment } from 'react';
import Map, { Marker, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { HiLocationMarker } from 'react-icons/hi';
import { UseFormSetValue } from 'react-hook-form';
import { DataProps } from '@/lib/types';
import TextInput from './textInput';
import { HiSearch, HiOutlineX } from 'react-icons/hi';
import useCustomModal from 'src/hooks/useCustomModal';
import { Combobox, Transition } from '@headlessui/react';

export type Props = {
  name: any;
  setState: UseFormSetValue<DataProps>;
  state: any;
};

export type GeoProps = {
  features: {
    text_id: string;
    place_name_id: string;
    center: Array<number>;
  }[];
};

export const MapPicker: React.FC<Props> = ({ setState, state, name }) => {
  const cordinateChecker = state[name]?.split(',') ?? [37.8, -122.4];
  const [viewport, setViewport] = React.useState<any>({
    longitude: cordinateChecker[1],
    latitude: cordinateChecker[0],
    bearing: 0,
    pitch: 0,
    zoom: 17,
  });
  const [search, setSearch] = React.useState('');
  const [searchResult, setSearchResult] = React.useState<GeoProps | null>({
    features: [],
  });

  const {
    isOpen: isMapOpen,
    setIsOpen: setIsMapOpen,
    toggle: toggleMap,
    ref: refMap,
  } = useCustomModal();

  React.useEffect(() => {
    const fetchingData = async () => {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?country=id&limit=3&proximity=ip&types=place%2Cpostcode%2Caddress%2Cregion%2Cdistrict%2Clocality%2Cneighborhood%2Cpoi%2Ccountry&language=id&access_token=pk.eyJ1IjoiYXFzaG9sIiwiYSI6ImNsMDFxeXB3cDAxY24za29jbzB3dGZmMXAifQ.kBd0VXt-SYDBq6K3f7Nd9w`
      );

      const data = await response.json();

      if (data) {
        setSearchResult(data);
      }
    };
    fetchingData();
  }, [search]);

  return (
    <div ref={refMap} className='relative w-full'>
      <div className='my-2 '>
        <Combobox
          value={search}
          onChange={(data) => {
            setViewport({
              ...viewport,
              longitude: data.split(',')[1],
              latitude: data.split(',')[0],
            });
            setState(name, data);
            setSearch('');
            setSearchResult(null);
          }}
        >
          <div className='relative mt-1 z-10'>
            <div>
              <Combobox.Input
                onFocus={() => setIsMapOpen(true)}
                placeholder='Cari Alamat...'
                className='p-4 rounded-lg placeholder:text-gray-400 w-full border outline-none ring-0 transition-colors duration-300 focus:ring-primary focus:border-primary focus:border-opacity-20 border-black border-opacity-10'
                onChange={(event) => setSearch(event.target.value)}
              />
              <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-3'>
                <HiSearch
                  className='text-xl text-gray-500'
                  aria-hidden='true'
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => setSearch('')}
            >
              <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {searchResult?.features?.length === 0 && search !== '' ? (
                  <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                    Tidak ditemukan.
                  </div>
                ) : (
                  searchResult?.features?.map((item) => (
                    <Combobox.Option
                      key={item.place_name_id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-primary text-white' : 'text-gray-900'
                        }`
                      }
                      value={`${item.center[1]},${item.center[0]}`}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {item.text_id}
                            <br />
                            {item.place_name_id}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            ></span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>

      {isMapOpen && (
        <div className='aspect-square w-full bg-gray-200 overflow-hidden rounded-md'>
          <Map
            {...viewport}
            onMove={(evt) => {
              setViewport(evt.viewState);
              setState(
                name,
                `${evt.viewState.latitude},${evt.viewState.longitude}`
              );
            }}
            style={{ borderRadius: '5px' }}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 14,
            }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
          >
            <Marker longitude={viewport.longitude} latitude={viewport.latitude}>
              <HiLocationMarker className='text-2xl text-red-500' />
            </Marker>
            <GeolocateControl />
          </Map>
        </div>
      )}
    </div>
  );
};

export default MapPicker;
