import { Stack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Profile from "./description/Profile";
import Jobs from "./description/Jobs";
import { useParams } from "react-router-dom";
import { CompanyContext } from "../../contextApi/CompanyContext";

const CompanyProfile = () => {
    const [company, setCompany] = useState({});
    const { id } = useParams();
    const { getCompanyById } = useContext(CompanyContext);

    const getCompanyInfo = async () => {
        const result = await getCompanyById(id);
        if (result.error) {
            return toast({ title: result.error, status: "error" });
        }
        setCompany(result);
    };

    useEffect(() => {
        getCompanyInfo();
    }, []);
    return (
        <Stack p={[2, 2, 4, 6]} gap={12}>
            <Profile company={company} />
            <Jobs />
        </Stack>
    );
};

export default CompanyProfile;
