export const validateBookingForm = (data) => {
    const errors = {};

    if (!data.selectedClinic) {
        errors.selectedClinic = 'Hãy chọn phòng khám.';
    }

    if (!data.selectedDate) {
        errors.selectedDate = 'Hãy chọn ngày đặt lịch.';
    }

    if (!data.timestamp) {
        errors.timestamp = 'Hãy chọn giờ.';
    }

    if (!data.selectedService) {
        errors.selectedService = 'Hãy chọn dịch vụ.';
    }

    if (!data.selectedStaff) {
        errors.selectedStaff = 'Hãy chọn KTV.';
    }

    return errors;
};

export default validateBookingForm;
