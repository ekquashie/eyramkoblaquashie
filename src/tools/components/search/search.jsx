import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Checkbox from "../checkbox/checkbox.jsx";
import {getCapsules} from "../../../redux/slices/capsule-slice.js";
import Capsule from "../capsule/capsule.jsx";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import CapsuleDetail from "../capsule-detail/capsule-detail.jsx";
import usePages from "../../hooks/usePages.js";

const Search = () => {
  const [filters, setFilters] = useState({
    status: {},
    type: {},
    original_launch: {},
  });
  const [capsule, setCapsule] = useState({});
  const [modalOn, setModalOn] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const {loading, capsules, statuses, types, original_launches} = useSelector((state) => state.capsules);
  const searchRef = useRef();
  const rowsRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCapsules({})).unwrap().then((response) => {
      if (response) {
        const statusFilter = {}
        const typeFilter = {};
        const launchFilter = {};
        statuses.map((status) => {
          if (status) {
            statusFilter[status] = false;
          }
        });
        original_launches.map((launch) => {
          if (launch) {
            launchFilter[launch] = false;
          }
        });
        types.map((type) => {
          if (type) {
            typeFilter[type] = false;
          }
        });
        setFilters({...filters, status: statusFilter, type: typeFilter, original_launch: launchFilter})
      }
    });
  }, [dispatch, statuses.length, types.length, original_launches.length]);

  const checkedCapsules = [...Object.entries(filters.status), ...Object.entries(filters.type), ...Object.entries(filters.original_launch)]
    .filter(filter => filter[1])
    .map(filter => filter[0]);
  const filteredCapsules = capsules.filter(({status, original_launch, type}) => {
      return checkedCapsules.includes(status) || checkedCapsules.includes(type) || checkedCapsules.includes(original_launch)
    }
  );

  // const {slice, range} = usePages(filteredCapsules.length > 0 ? filteredCapsules : capsules, page, rowsPerPage);

  const handleFilter = (e) => {
    const {name, dataset: {filter}} = e.target;
    return setFilters({...filters, [filter]: {...filters[filter], [name]: !filters[filter][name]}});
  }

  const handleSearch = () => {
    const {value} = searchRef.current;
    if (value !== "") {
      setPage(1);
      // rowsRef.current.value = 100;
      // setRowsPerPage(100);
    } else {
      // rowsRef.current.value = 9;
      // setRowsPerPage(9);
    }
    setSearch(value.toLowerCase());
  }

  return (
    <>
      <section  className="flex justify-center items-center w-full py-10 px-20 mx-auto">
          <input
            ref={searchRef}
            className="w-full sm:max-w-[200px] md:w-full md:max-w-full h-full px-3 py-1 text-gray-700 text-md placeholder-gray-500 focus:ring-0 focus:placeholder-gray-400 text-sm md:text-normal border border-gray-300 rounded-full focus:text-gray-700 focus:bg-white focus:outline-none"
            type="search"
            placeholder="Search by capsule serial eg. C101"
            onChange={handleSearch}
          />
      </section>

      {modalOn && <ModalOverlay setModalOn={setModalOn}>
        <CapsuleDetail capsule={capsule}/>
      </ModalOverlay>}
      <section className="flex w-full px-20 mx-auto">
        {/*Filter Section*/}
        <section className="w-3/12">
          <div className="flex flex-col space-y-5 p-5 shadow-md rounded-md">
            <div>
              <h2 className="font-bold">Status</h2>
              {statuses.map((status, index) => {
                if (status)
                  return <Checkbox key={index} name={status} id="status" checked={filters.status[status]}
                                   handleFilter={handleFilter}/>
              })}
            </div>
            <div><h2 className="font-bold">Type</h2>
              {types.map((type, index) => {
                if (type)
                  return <Checkbox key={index} name={type} id="type" checked={filters.type[type]}
                                   handleFilter={handleFilter}/>
              })}</div>

            <div><h2 className="font-bold">Original Launch</h2>
              {original_launches.map((launch, index) => {
                if (launch)
                  return <Checkbox key={index} name={launch} id="original_launch"
                                   checked={filters.original_launch[launch]}
                                   handleFilter={handleFilter}/>
              })}
            </div>
          </div>
        </section>

        {/*Data Grid & Search Section*/}
        <section className="p-5 w-9/12 grid grid-cols-3 gap-2">
          {filteredCapsules.length > 0 ? filteredCapsules.filter((capsule) => capsule.capsule_serial.toLowerCase().includes(search)).map((capsule, index) => {
            return <Capsule
              key={index}
              capsule={capsule}
              onView={() => {
                setCapsule(capsule)
                setModalOn(true);
              }}
            />
          }) : capsules.filter((capsule) => capsule.capsule_serial.toLowerCase().includes(search)).map((capsule, index) => {
            return <Capsule
              onView={() => {
                setCapsule(capsule)
                setModalOn(true);
              }}
              key={index}
              capsule={capsule}/>
          })}
        </section>
      </section>
    </>
  );
}

export default Search;